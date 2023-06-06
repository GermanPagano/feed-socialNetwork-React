import React, { useContext, useRef, useState, useEffect } from "react";
import BtnPublish from "../../components/Btn-Publish/BtnPublish";
import { UserContext } from "../../storage/UserContext";
import "./PublisherStyles.css";
import defaultImage from "../../assets/1297525.png";
import { db } from "../../services/firebase";
import { addDoc, collection, query, orderBy, onSnapshot } from "firebase/firestore";

function Publisher() {
  const context = useContext(UserContext);
  const { username } = context.userData;
  const muroRef = useRef(null);
  const textareaRef = useRef(null);
  const inputRef = useRef(null);

  const [post, setPost] = useState([]);

  useEffect(() => {
    const posteosRef = collection(db, "posteos");
    const q = query(posteosRef, orderBy("fecha", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const posts = [];
      snapshot.forEach((doc) => {
        posts.push(doc.data());
      });
      setPost(posts);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const formatTimestamp = (timestamp) => {
    const date = timestamp.toDate();
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleString(undefined, options);
  };

  const handlePublisher = () => {
    const textValue = textareaRef.current.value;

    const newPost = {
      texto: textValue,
      fecha: new Date(),
      nombreUsuario: username,
    };

    const posteosRef = collection(db, "posteos");

    addDoc(posteosRef, newPost)
      .then((docRef) => {
        console.log("Posteo almacenado con ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error al almacenar el posteo: ", error);
      });

    textareaRef.current.value = "";
    inputRef.current.value = null;
  };

  return (
    <div className="col col-6 muro" ref={muroRef}>
      <div className="publisher">
        <div className="comment-box">
          <div className="comment-box-header">
            <img className="post-avatar" src={defaultImage} alt="foto de perfil" />
            <div className="comment-box-user-info">
              <h5 className="comment-box-username">{username}</h5>
            </div>
          </div>
          <div className="comment-box-body">
            <textarea
              className="comment-box-textarea"
              placeholder="Comparti una historia para la comunidad"
              ref={textareaRef}
            ></textarea>
          </div>
          <div className="comment-box-footer">
            <input
              id="image-input"
              type="file"
              className="file-input"
              ref={inputRef}
              style={{ display: "none" }}
            />
            <BtnPublish onClick={handlePublisher} />
          </div>
        </div>
      </div>
      {post.length > 0 ? (
        <>
          {post.map((p, index) => (
            <div className="post" key={index}>
              <div className="post-header">
                <img className="post-avatar" src={defaultImage} alt="foto de perfil" />
                <div className="post-user-info">
                  <h5 className="post-username">{p.nombreUsuario}</h5>
                  <p className="post-timestamp">{formatTimestamp(p.fecha)}</p>
                </div>
              </div>
              <div className="post-body">
                <p className="post-text">{p.texto}</p>
              </div>
              <div className="container btn-actions-post">
                <button className="like-button">👍</button>
                <button className="dislike-button">👎</button>
              </div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default Publisher;




