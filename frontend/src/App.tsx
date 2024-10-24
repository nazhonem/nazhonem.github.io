const products = [
  { title: 'Skill 1', imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg', id: 1 },
  { title: 'Skill 2', imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg', id: 2 },
  { title: 'Skill 3', imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg', id: 3 },
];

export default function ShoppingList() {
  function handleClick() {
    alert('You clicked me!');
  }

  const projectSkills = products.map(product =>
    <li
      key={product.id}
    >
      <button onClick={handleClick}>
        <img 
          className="projectImage"
          src={product.imageUrl}
          alt={'photo of ' + product.title}
          style={{
            width: 90,
            height: 90
          }}
        />
        <h3>{product.title}</h3>
      </button>
      
    </li>
  );
  

  return (
    <>
      <h2>Skills</h2>
      <ul>{projectSkills}</ul>
      <button onClick={handleClick}>
        Click me
      </button>
    </>
  );
}