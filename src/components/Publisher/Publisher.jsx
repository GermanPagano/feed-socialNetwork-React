import React, { useContext, useRef, useState } from "react";
import BtnPublish from "../../components/Btn-Publish/BtnPublish";
import { UserContext } from "../../storage/UserContext";
import "./PublisherStyles.css";
import { BsFillCameraFill } from "react-icons/bs";

function Publisher() {

  const context = useContext(UserContext);
  const { username, imgUrl } = context.userData;
  const muroRef = useRef(null);
  const textareaRef = useRef(null);
  const inputRef = useRef(null);

  const [post, setPost] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const handlePublisher = () => {
    const textValue = textareaRef.current.value;
    const fileValue = inputRef.current.files[0];

    // Crear un nuevo objeto post con los valores actuales
    const newPost = { text: textValue, imgPub: fileValue };

    // Agregar el nuevo post al arreglo de posts
    setPost([...post, newPost]);

    // Leer la imagen seleccionada y establecer la URL de la imagen
    if (fileValue && fileValue.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageUrl(event.target.result);
      };
      reader.readAsDataURL(fileValue);
    }

    // Limpiar el estado del componente después de publicar
    textareaRef.current.value = "";
    inputRef.current.value = null;
  };

  return (
    <div className="col col-6  muro " ref={muroRef}>
      <div className="publisher">
        <div className="comment-box">
          <div className="comment-box-header">
          {/* aca iria la img */}
            <div className="comment-box-user-info">
              <h5 className="comment-box-username">{username}</h5>
            </div>
          </div>
          <div className="comment-box-body">
            <textarea
              className="comment-box-textarea"
              placeholder="Comparti una historia para la comunidad "
              ref={textareaRef}
            ></textarea>
          </div>

          <div className="comment-box-footer">

            <label
              htmlFor="image-input"
              style={{ cursor: "pointer" }}
            >
              <BsFillCameraFill
                id="camera-icon"
                type="file"
                size={30}
                style={{ color: "#34343550" }}
              />
            </label>

            <input
              id="image-input"
              type="file"
              className="file-input"
              ref={inputRef}
              style={{display:'none'}}
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
                <img
                  className="post-avatar"
                  src={imgUrl}
                  alt="foto de perfil"
                />
                <div className="post-user-info">
                  <h5 className="post-username">{username}</h5>
                  <p className="post-timestamp">
                    {new Date().toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="post-body">
                <p className="post-text">{p.text}</p>
                {p.imgPub && (
                  <img
                    className="post-image"
                    src={URL.createObjectURL(p.imgPub)}
                    alt="Imagen publicada"
                  />
                )}
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
