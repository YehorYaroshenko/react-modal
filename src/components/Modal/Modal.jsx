import './Modal.css'
import { AiOutlineClose } from "react-icons/ai";

function Modal({ active, setActive, children }) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
         <AiOutlineClose className='modal__content-close' onClick={() => setActive(false)}/>
        <h1 className="modal__content-title">Modal Window</h1>
        <p className="modal__content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          obcaecati aut eveniet molestias iste molestiae odit. Perferendis
          voluptates facilis quasi eveniet culpa, dolore ipsam nam non, iste
          numquam officia porro cumque quod! Officiis praesentium doloremque
          vero odio. Omnis quibusdam vel ullam est enim, alias impedit quod!
          Ipsum repellendus perferendis cum, veritatis porro veniam explicabo,
          quod voluptatibus esse accusamus possimus sunt eius obcaecati aperiam
          perspiciatis hic, dolorem maxime? Nobis cupiditate vel quibusdam
          nesciunt eum qui aperiam voluptatem maxime! Dolore placeat dolores
          illum. Perferendis velit libero deserunt nostrum tenetur eius dolore.
          A, corrupti? Excepturi aspernatur labore illum saepe alias ducimus
          sunt. Et.
        </p>
        <button className="modal__content-button">hello</button>
      </div>
    </div>
  )
}

export default Modal
