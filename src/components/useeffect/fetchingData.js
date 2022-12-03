import React ,{useState ,useEffect} from 'react';

import axios from 'axios';

const FetchData = () => {
    const [posts, setposts] = useState([])
    const [Id, setId] = useState(1)
    useEffect(() => {
      axios
      .get(`http:localhost:3000/users/${Id}`)
      .then(res => {
        console.log(res)
        setposts(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
      return () => {
        
      }
    }, [Id])
    

  return (
            <div>
                <input type="text" Value= {Id} Onchange={(e)=>setId(e.target.Value)} />
                {
                    posts? posts :" no posts right now kid "
                }

                
            </div>
    
  )
}

export default FetchData