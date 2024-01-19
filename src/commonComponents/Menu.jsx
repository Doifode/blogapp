import React from 'react'

const Menu = () => {
  const dummyData = [
    {
      id: 1,
      title: "Record 1 Title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eos blanditiis, deserunt inventore, totam aliquam ipsa reiciendis ipsum deleniti labore vitae mollitia autem earum distinctio numquam eius porro explicabo recusandae dolore non repellendus tenetur! Possimus deserunt, velit odio deleniti recusandae quas blanditiis, assumenda iure itaque quos molestias tenetur, aspernatur sapiente.",
      img: "https://fakeimg.pl/350x200/ff0000/000"
    },
    {
      id: 2,
      title: "Record 2 Title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eos blanditiis, deserunt inventore, totam aliquam ipsa reiciendis ipsum deleniti labore vitae mollitia autem earum distinctio numquam eius porro explicabo recusandae dolore non repellendus tenetur! Possimus deserunt, velit odio deleniti recusandae quas blanditiis, assumenda iure itaque quos molestias tenetur, aspernatur sapiente.",
      img: "https://fakeimg.pl/350x200/ff0000/000"
    },
    {
      id: 3,
      title: "Record 3 Title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eos blanditiis, deserunt inventore, totam aliquam ipsa reiciendis ipsum deleniti labore vitae mollitia autem earum distinctio numquam eius porro explicabo recusandae dolore non repellendus tenetur! Possimus deserunt, velit odio deleniti recusandae quas blanditiis, assumenda iure itaque quos molestias tenetur, aspernatur sapiente.",
      img: "https://fakeimg.pl/350x200/ff0000/000"
    },
    {
      id: 4,
      title: "Record 4 Title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eos blanditiis, deserunt inventore, totam aliquam ipsa reiciendis ipsum deleniti labore vitae mollitia autem earum distinctio numquam eius porro explicabo recusandae dolore non repellendus tenetur! Possimus deserunt, velit odio deleniti recusandae quas blanditiis, assumenda iure itaque quos molestias tenetur, aspernatur sapiente.",
      img: "https://fakeimg.pl/350x200/ff0000/000"
    },
    {
      id: 5,
      title: "Record 5 Title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eos blanditiis, deserunt inventore, totam aliquam ipsa reiciendis ipsum deleniti labore vitae mollitia autem earum distinctio numquam eius porro explicabo recusandae dolore non repellendus tenetur! Possimus deserunt, velit odio deleniti recusandae quas blanditiis, assumenda iure itaque quos molestias tenetur, aspernatur sapiente.",
      img: "https://fakeimg.pl/350x200/ff0000/000"
    },
    {
      id: 6,
      title: "Record 6 Title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eos blanditiis, deserunt inventore, totam aliquam ipsa reiciendis ipsum deleniti labore vitae mollitia autem earum distinctio numquam eius porro explicabo recusandae dolore non repellendus tenetur! Possimus deserunt, velit odio deleniti recusandae quas blanditiis, assumenda iure itaque quos molestias tenetur, aspernatur sapiente.",
      img: "https://fakeimg.pl/350x200/ff0000/000"
    }
  ]

  return (
    <div className='menu'>
      {
        dummyData.map((i) => {
          return <div key={i.id} className="post">
            <img src={i.img} alt="" />
            <h2>{i.title}</h2>
            <button className="btn">Read More</button>
          </div>
        })
      }

    </div>
  )
}

export default Menu