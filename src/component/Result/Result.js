import {useEffect,useState } from "react"
import axios from "../../helpers/axios"
import VideoCard from "../videoCard/VideoCard"
import './Result.css'
import FlipMove from 'react-flip-move'

const Result = ({selectedOption}) => {

    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            return request;
        };
        fetchData();
    },[selectedOption]);
  

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie)=>(
            <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  )
}

export default Result
