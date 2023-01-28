import { useState } from 'react'
import './App.css'
import Modal from './components/Modal/Modal'

function App() {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="App">
      <button className="button_modal" onClick={() => setModalActive(true)}>
        Click for open
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia
        minima odit? Nulla dolor quae commodi temporibus placeat neque dolores,
        voluptatem et ea ipsum saepe odio autem aliquid quo illum totam nobis
        impedit maxime nemo minus ex odit! Eaque sequi, maiores fugit velit
        reprehenderit illum fugiat voluptatum deleniti, blanditiis autem placeat
        deserunt unde quam, voluptates iste laborum corporis reiciendis nulla
        natus tempore facilis perspiciatis quisquam cumque. Aut doloremque qui
        in nam amet asperiores velit nemo repudiandae veniam sunt dolores magnam
        omnis perspiciatis earum quis, perferendis repellendus animi, quos,
        officiis quia ipsam? Deserunt explicabo quaerat esse suscipit laborum
        doloremque iusto dolore tempore similique, neque sed saepe tenetur quis
        quae nostrum perspiciatis. Voluptate, assumenda! Est et dolorem cum
        dolor enim reiciendis doloribus accusantium porro corporis consectetur
        voluptas aperiam nihil illo, doloremque obcaecati tempora, ipsam debitis
        vero rerum. Reiciendis sit fugit commodi voluptates recusandae
        aspernatur nam necessitatibus quos hic, illum praesentium magni
        assumenda dignissimos ab enim quia. Delectus amet ad excepturi,
        voluptatum rerum ab, neque nihil eos qui quos non natus consequatur
        commodi esse similique adipisci fugiat eaque sed accusantium itaque
        asperiores voluptas perferendis? Vel quo fugit impedit. Dolores neque
        modi nemo repudiandae ipsum iusto eius, quibusdam rem atque sequi
        molestias quod officia.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia
        minima odit? Nulla dolor quae commodi temporibus placeat neque dolores,
        voluptatem et ea ipsum saepe odio autem aliquid quo illum totam nobis
        impedit maxime nemo minus ex odit! Eaque sequi, maiores fugit velit
        reprehenderit illum fugiat voluptatum deleniti, blanditiis autem placeat
        deserunt unde quam, voluptates iste laborum corporis reiciendis nulla
        natus tempore facilis perspiciatis quisquam cumque. Aut doloremque qui
        in nam amet asperiores velit nemo repudiandae veniam sunt dolores magnam
        omnis perspiciatis earum quis, perferendis repellendus animi, quos,
        officiis quia ipsam? Deserunt explicabo quaerat esse suscipit laborum
        doloremque iusto dolore tempore similique, neque sed saepe tenetur quis
        quae nostrum perspiciatis. Voluptate, assumenda! Est et dolorem cum
        dolor enim reiciendis doloribus accusantium porro corporis consectetur
        voluptas aperiam nihil illo, doloremque obcaecati tempora, ipsam debitis
        vero rerum. Reiciendis sit fugit commodi voluptates recusandae
        aspernatur nam necessitatibus quos hic, illum praesentium magni
        assumenda dignissimos ab enim quia. Delectus amet ad excepturi,
        voluptatum rerum ab, neque nihil eos qui quos non natus consequatur
        commodi esse similique adipisci fugiat eaque sed accusantium itaque
        asperiores voluptas perferendis? Vel quo fugit impedit. Dolores neque
        modi nemo repudiandae ipsum iusto eius, quibusdam rem atque sequi
        molestias quod officia.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia
        minima odit? Nulla dolor quae commodi temporibus placeat neque dolores,
        voluptatem et ea ipsum saepe odio autem aliquid quo illum totam nobis
        impedit maxime nemo minus ex odit! Eaque sequi, maiores fugit velit
        reprehenderit illum fugiat voluptatum deleniti, blanditiis autem placeat
        deserunt unde quam, voluptates iste laborum corporis reiciendis nulla
        natus tempore facilis perspiciatis quisquam cumque. Aut doloremque qui
        in nam amet asperiores velit nemo repudiandae veniam sunt dolores magnam
        omnis perspiciatis earum quis, perferendis repellendus animi, quos,
        officiis quia ipsam? Deserunt explicabo quaerat esse suscipit laborum
        doloremque iusto dolore tempore similique, neque sed saepe tenetur quis
        quae nostrum perspiciatis. Voluptate, assumenda! Est et dolorem cum
        dolor enim reiciendis doloribus accusantium porro corporis consectetur
        voluptas aperiam nihil illo, doloremque obcaecati tempora, ipsam debitis
        vero rerum. Reiciendis sit fugit commodi voluptates recusandae
        aspernatur nam necessitatibus quos hic, illum praesentium magni
        assumenda dignissimos ab enim quia. Delectus amet ad excepturi,
        voluptatum rerum ab, neque nihil eos qui quos non natus consequatur
        commodi esse similique adipisci fugiat eaque sed accusantium itaque
        asperiores voluptas perferendis? Vel quo fugit impedit. Dolores neque
        modi nemo repudiandae ipsum iusto eius, quibusdam rem atque sequi
        molestias quod officia.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia
        minima odit? Nulla dolor quae commodi temporibus placeat neque dolores,
        voluptatem et ea ipsum saepe odio autem aliquid quo illum totam nobis
        impedit maxime nemo minus ex odit! Eaque sequi, maiores fugit velit
        reprehenderit illum fugiat voluptatum deleniti, blanditiis autem placeat
        deserunt unde quam, voluptates iste laborum corporis reiciendis nulla
        natus tempore facilis perspiciatis quisquam cumque. Aut doloremque qui
        in nam amet asperiores velit nemo repudiandae veniam sunt dolores magnam
        omnis perspiciatis earum quis, perferendis repellendus animi, quos,
        officiis quia ipsam? Deserunt explicabo quaerat esse suscipit laborum
        doloremque iusto dolore tempore similique, neque sed saepe tenetur quis
        quae nostrum perspiciatis. Voluptate, assumenda! Est et dolorem cum
        dolor enim reiciendis doloribus accusantium porro corporis consectetur
        voluptas aperiam nihil illo, doloremque obcaecati tempora, ipsam debitis
        vero rerum. Reiciendis sit fugit commodi voluptates recusandae
        aspernatur nam necessitatibus quos hic, illum praesentium magni
        assumenda dignissimos ab enim quia. Delectus amet ad excepturi,
        voluptatum rerum ab, neque nihil eos qui quos non natus consequatur
        commodi esse similique adipisci fugiat eaque sed accusantium itaque
        asperiores voluptas perferendis? Vel quo fugit impedit. Dolores neque
        modi nemo repudiandae ipsum iusto eius, quibusdam rem atque sequi
        molestias quod officia.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia
        minima odit? Nulla dolor quae commodi temporibus placeat neque dolores,
        voluptatem et ea ipsum saepe odio autem aliquid quo illum totam nobis
        impedit maxime nemo minus ex odit! Eaque sequi, maiores fugit velit
        reprehenderit illum fugiat voluptatum deleniti, blanditiis autem placeat
        deserunt unde quam, voluptates iste laborum corporis reiciendis nulla
        natus tempore facilis perspiciatis quisquam cumque. Aut doloremque qui
        in nam amet asperiores velit nemo repudiandae veniam sunt dolores magnam
        omnis perspiciatis earum quis, perferendis repellendus animi, quos,
        officiis quia ipsam? Deserunt explicabo quaerat esse suscipit laborum
        doloremque iusto dolore tempore similique, neque sed saepe tenetur quis
        quae nostrum perspiciatis. Voluptate, assumenda! Est et dolorem cum
        dolor enim reiciendis doloribus accusantium porro corporis consectetur
        voluptas aperiam nihil illo, doloremque obcaecati tempora, ipsam debitis
        vero rerum. Reiciendis sit fugit commodi voluptates recusandae
        aspernatur nam necessitatibus quos hic, illum praesentium magni
        assumenda dignissimos ab enim quia. Delectus amet ad excepturi,
        voluptatum rerum ab, neque nihil eos qui quos non natus consequatur
        commodi esse similique adipisci fugiat eaque sed accusantium itaque
        asperiores voluptas perferendis? Vel quo fugit impedit. Dolores neque
        modi nemo repudiandae ipsum iusto eius, quibusdam rem atque sequi
        molestias quod officia.
      </p>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  )
}

export default App
