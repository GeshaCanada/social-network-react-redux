/*import React from "react";
import S from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && S.selectedPage}
              onClick={(event) => {
                props.onPageChanged(p)
              }}>
              {p}
            </span>
          )
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"./../profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={S.userPhoto} />
              </NavLink>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {

                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "3c982f57-1042-4867-8827-32c70e4d6d7f"
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode == 0) {
                        props.unfollow(u.id)
                      }
                    })

                }}>Unfollow</button>
                : <button onClick={() => {

                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "3c982f57-1042-4867-8827-32c70e4d6d7f"
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode == 0) {
                        props.follow(u.id)
                      }
                    })

                }}>Follow</button>}

            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.city"}</div>
              <div>{"u.location.country"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users;*/
