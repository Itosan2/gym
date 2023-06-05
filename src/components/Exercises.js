import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import PaginationTwo from "./PaginationTwo";
// import Posts from "./Posts";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
// import Loader from "./Loader";

import { dataDb } from "./DataDb";
import ExerciseData from "./ExerciseData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageTwo, setCurrentPageTwo] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    // fetchExercisesData();
    if (bodyPart === "all") {
      setExercises(ExerciseData);
    } else {
      setExercises(
        ExerciseData.filter((exercise) => exercise.bodyPart === bodyPart)
      );
    }
  }, [bodyPart]);

  // useEffect(() => {
  //   setExercises(dataDb);
  // }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   setPosts(dataDb);
  //   setLoading(false);
  // }, []);

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // setHowManyPages(Math.ceil(exercises.length / postsPerPage));
  // const howManyPages = Math.ceil(posts.length / postsPerPage);
  const howManyPages = Math.ceil(exercises.length / postsPerPage);

  const currentExercises = exercises.slice(indexOfFirstPost, indexOfLastPost);
  //Change Page
  const paginate = (pageNumber) => {
    const element = document.getElementById("exercises");
    if (element) {
      setCurrentPage(pageNumber);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  // if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        <PaginationTwo
          pages={howManyPages}
          setCurrentPage={setCurrentPage}
          paginate={paginate}
        />
      </Stack>

      {/* <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={exercises.length}
            paginate={paginate}
          />
        )}
      </Stack> */}
    </Box>
  );
};

export default Exercises;
