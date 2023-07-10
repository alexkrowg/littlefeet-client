import React from 'react'
import "./Community.scss"

const Community = () => {

    const data = [
        {
            img: "https://images.pexels.com/photos/15880695/pexels-photo-15880695/free-photo-of-portrait-of-a-father-holding-a-sleeping-baby-son-wrapped-in-a-towel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            username: "robertomotion"
        },
        {
            img: "https://images.pexels.com/photos/5523120/pexels-photo-5523120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            username: "briochejulia"
        },
        {
            img: "https://images.pexels.com/photos/4617294/pexels-photo-4617294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            username: "imaginesarah"
        },
        {
            img: "https://images.pexels.com/photos/17045089/pexels-photo-17045089/free-photo-of-a-man-holding-his-little-son-and-both-of-them-wearing-brazil-shirts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            username: "tomzigzag"
        },
        {
            img: "https://images.pexels.com/photos/15961876/pexels-photo-15961876/free-photo-of-father-lying-on-the-bed-with-his-newborn-baby.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            username: "rugbyalex"
        },
    ]

    const communityUsers = data.map(user => {
        return <div className='community-user'>
            <img src={user.img} alt="" />
            <h3>@{user.username}</h3>
        </div>
    })

    return (
        <div className='community-container'>
            <h1>#<span style={{color:"#FF4E4E"}}>littlefeet</span>community</h1>
            <p>Get inspired and share your <span style={{color:"#FF4E4E"}}>littlefeet</span> looks using the #littlefeetcommunity hashtag and tag us at @littlefeet</p>
            <div className="users">
                {communityUsers}
            </div>
            <button>Join</button>
        </div>
    )
}

export default Community