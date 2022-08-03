import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Footer, Sidebar } from "../../components";
import "./video-playback.css";
import { useStateContext } from "../../context/StateProvider";
import { VideoCard } from "../Explore/components/VideoCard";
import { shuffleArray } from "../../utils/shuffleArray";
import { addToHistory } from "../../utils/videoUtils";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import { useAuthContext } from "../../context/AuthProvider";
import { addToLikedVideos, addToWatchLater } from "../../utils/videoUtils";

export const VideoPlayback = () => {
  const encodedToken = localStorage.getItem("token");

  let { id } = useParams();
  const [video, setvideo] = useState();
  const [loading, setLoading] = useState(true);
  const {
    videos,
    watchLater,
    likedVideos,
    videosDispatch,
    toastHandler,
    setShowPlaylistModal,
  } = useStateContext();

  const { userState } = useAuthContext();

  const [popularVideos, setPopularVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${id}`);
        if (response.status === 200 || response.status === 201) {
          setvideo(response.data.video);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    })();
    setPopularVideos(() =>
      shuffleArray(videos.filter((video) => video.popular === true))
    );
  }, [id]);

  return (
    <>
      <div className="container">
        <Sidebar />

        <div className="pages video-page">
          {!loading && (
            <>
              <section className="video-details">
                <div className="player-container">
                  <ReactPlayer
                    url={`https://www.youtube.com/embed/${video._id}`}
                    controls={true}
                    width={"100%"}
                    height={"100%"}
                    onStart={() => {
                      if (encodedToken) {
                        addToHistory(video, videosDispatch);
                      }
                    }}
                  />
                </div>

                <div className="text-container">
                  <h3 className="underline">{video.title}</h3>

                  <div className="creator-details">
                    <div className="flex-center">
                      <img
                        className="avatar avatar-standard"
                        src={video.creator.avatar}
                        alt={video.creator.name}
                      />
                      <span>{video.creator.name}</span>
                    </div>

                    <div className="btn-container">
                      <button
                        onClick={() => {
                          if (userState._id) {
                            addToLikedVideos(
                              video,
                              likedVideos,
                              videosDispatch,
                              toastHandler
                            );
                          } else {
                            toastHandler(
                              true,
                              "You need to login first!",
                              "error"
                            );
                          }
                        }}
                        className="btn"
                      >
                        {likedVideos.some((item) => item._id === video._id) ? (
                          <div className="flex-center">
                            <AiFillLike /> <p>Liked</p>
                          </div>
                        ) : (
                          <div className="flex-center">
                            <AiOutlineLike /> <p>Like</p>
                          </div>
                        )}
                      </button>

                      <button
                        onClick={() => {
                          if (userState._id) {
                            setShowPlaylistModal(true);
                            videosDispatch({
                              type: "SET_SELECTED_VIDEO",
                              payload: video,
                            });
                          } else {
                            toastHandler(
                              true,
                              "You need to login first!",
                              "error"
                            );
                          }
                        }}
                        className="btn flex-center"
                      >
                        <BsPlusCircle />
                        <p>Save</p>
                      </button>

                      <button
                        onClick={() => {
                          if (userState._id) {
                            addToWatchLater(
                              video,
                              watchLater,
                              videosDispatch,
                              toastHandler
                            );
                          } else {
                            toastHandler(
                              true,
                              "You need to login first!",
                              "error"
                            );
                          }
                        }}
                        className="btn flex-center"
                      >
                        {watchLater.some((item) => item._id === video._id) ? (
                          <BsDashCircle />
                        ) : (
                          <BsPlusCircle />
                        )}{" "}
                        <p>Watch Later</p>
                      </button>
                    </div>
                  </div>
                  <p>{video.desc}</p>
                </div>
              </section>
              <div className="must-watch">
                <h4 className="text-center underline">Must Watch</h4>
                {popularVideos.map((item) => {
                  return <VideoCard key={item._id} {...item} />;
                })}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
