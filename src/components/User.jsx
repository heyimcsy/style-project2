const User = ({item, clickDelButtonHandler}) => {
    return (
      <div key={item.id} className="box-style">
                {item.age} - {item.name}
                <button onClick={() => clickDelButtonHandler(item.id)}>x</button>
              </div>
    )
  }

  export default User;