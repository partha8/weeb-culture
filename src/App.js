import Mockman from "mockman-js";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, PlaylistModal, Toast } from "./components";
import { useAuthContext } from "./context/AuthProvider";
import { useStateContext } from "./context/StateProvider";

import {
  useGetHistory,
  useGetVideos,
  useSignup,
  useGetCategories,
  useGetWatchLater,
  useGetLikedVideos,
  useGetPlaylists,
} from "./hooks";

import {
  Explore,
  Home,
  Login,
  Profile,
  SignUp,
  Error404,
  History,
  VideoPlayback,
  LikedVideos,
  PlaylistsContainer,
  WatchLater,
  Playlist,
} from "./pages";

import { PrivateRoute } from "./routes/PrivateRoute";

export const App = () => {
  useGetCategories();
  useGetVideos();
  useGetHistory();
  useGetWatchLater();
  useGetLikedVideos();
  useGetPlaylists();

  const { toast, showPlaylistModal } = useStateContext();
  const { userState } = useAuthContext();

  return (
    <>
      {toast.showToast && <Toast />}
      {showPlaylistModal && <PlaylistModal />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        {userState._id && <Route path="/profile" element={<Profile />} />}

        <Route
          path="/history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />

        <Route
          path="/watch-later"
          element={
            <PrivateRoute>
              <WatchLater />
            </PrivateRoute>
          }
        />

        <Route
          path="/liked-videos"
          element={
            <PrivateRoute>
              <LikedVideos />
            </PrivateRoute>
          }
        />

        <Route
          path="/playlists"
          element={
            <PrivateRoute>
              <PlaylistsContainer />
            </PrivateRoute>
          }
        />

        <Route
          path="/playlist/:playlistId"
          element={
            <PrivateRoute>
              <Playlist />
            </PrivateRoute>
          }
        />

        <Route path="/video/:id" element={<VideoPlayback />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};
