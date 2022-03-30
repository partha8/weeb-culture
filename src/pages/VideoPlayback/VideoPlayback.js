import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Footer, Sidebar } from "../../components";
import "./video-playback.css";
import { useStateContext } from "../../context/StateProvider";
import { VideoCard } from "../Explore/components/VideoCard";
import { shuffleArray } from "../../utils/shuffleArray";

export const VideoPlayback = () => {
  let { id } = useParams();
  const [video, setvideo] = useState();
  const [loading, setLoading] = useState(true);
  const { videos } = useStateContext();

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
  }, []);

  const popularVideos = videos.filter((video) => video.popular === true);
  const shuffledArray = shuffleArray(popularVideos);

  return (
    <>
      <div className="container">
        <Sidebar />

        <div className="pages video-page">
          {!loading && (
            <section className="video-details">
              <div className="player-container">
                <ReactPlayer
                  url={`https://www.youtube.com/embed/${video._id}`}
                  controls={true}
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="text-container">
                <h3 className="underline">{video.title}</h3>
                <div className="creator-details">
                  <img
                    className="avatar avatar-standard"
                    src={video.creator.avatar}
                    alt={video.creator.name}
                  />
                  <span>{video.creator.name}</span>
                </div>
                <p>{video.desc}</p>
              </div>
            </section>
          )}
          <div className="must-watch">
            {shuffledArray.map((item) => {
              return <VideoCard key={item._id} {...item} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
