import { useState, useEffect } from 'react';
import './app.scss';
import ToDoList from './components/ToDoList';
import Item from './components/Item';
import User from './components/User';
import moment from 'moment';
import { postItem } from './routes';

export const App = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [ddn, setDDN] = useState("");
  const [pwd, setPwd] = useState("");

  const [todo, setToDo] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemContent, setItemContent] = useState("");
  const [adding, setAdding] = useState(false);

  const login = (e) => {
    e.preventDefault();
    const user = new User({
      prenom: firstname, 
      nom: lastname, 
      email: email, 
      ddn: ddn,
      mdp: pwd
    });
    if(user.isValid()) {
      localStorage.setItem("user", JSON.stringify({
        firstname: user.prenom,
        lastname: user.nom,
        email: user.email,
        ddn: user.ddn,
        pwd: user.mdp
      }));
      //setToDo(new ToDoList(user, []));
      setFirstname("");
      setLastname("");
      setEmail("");
      setDDN("");
      setPwd("");
    }
  }

  const logout = () => {
    localStorage.removeItem("user");
    setToDo(null);
    setAdding(false);
    setItemName("");
    setItemContent("");
  }

  const handleAdd = () => {
    postItem(itemName, itemContent, new Date().toJSON())
    .then(function(response){
      if(response.status === 200 && todo.add(itemName, itemContent, new Date())) {
        setAdding(false);
        setItemName("");
        setItemContent("");
      }
    })
  }

  useEffect(() => {
    if(todo === null) {
      fetch('/items')
      .then(res => res.json())
      .then(items => setToDo(new ToDoList(new User({
          prenom: JSON.parse(localStorage.getItem("user")).firstname, 
          nom: JSON.parse(localStorage.getItem("user")).lastname, 
          email: JSON.parse(localStorage.getItem("user")).email, 
          ddn: JSON.parse(localStorage.getItem("user")).ddn,
          mdp: JSON.parse(localStorage.getItem("user")).pwd
        }),
        items.map(it => new Item({
          name: it.name,
          content: it.content,
          createdAt: it.createdAt
        }))
      )));
    }
  }, []);

  //page s'actualise
  /*if(todo === null && localStorage.getItem("user") !== null) setToDo(new ToDoList(new User({
    prenom: JSON.parse(localStorage.getItem("user")).firstname, 
    nom: JSON.parse(localStorage.getItem("user")).lastname, 
    email: JSON.parse(localStorage.getItem("user")).email, 
    ddn: JSON.parse(localStorage.getItem("user")).ddn,
    mdp: JSON.parse(localStorage.getItem("user")).pwd
  }), []));*/

  return (
    <div className="App">
      {localStorage.getItem("user") === null ?
      <div className="connexion">
        <form className="connexionForm" onSubmit={(e) => login(e)}>
          <div>
            <label htmlFor="firstName">Prénom</label>
            <input id="firstName" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="lastName">Nom</label>
            <input id="lastName" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="firstName">Email</label>
            <input id="firstName" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          
          <div>
            <label htmlFor="firstName">Date de naissance</label>
            <input id="firstName" type="date" value={ddn} onChange={(e) => setDDN(e.target.value)}/>
          </div>
          
          <div>
            <label htmlFor="firstName">Mot de passe <span className="small">(entre 8 et 40 caractères)</span></label>
            <input id="firstName" type="password" value={pwd} onChange={(e) => setPwd(e.target.value)}/>
          </div>

          <button type="submit">Se connecter</button>
        </form>
      </div>
      :
      <div className="main">
        <nav>
          <p>{JSON.parse(localStorage.getItem("user")).firstname} {JSON.parse(localStorage.getItem("user")).lastname}</p>
          <i className="fas fa-sign-out-alt" onClick={() => logout()}></i>
        </nav>

        <div className="todolist">
          <div className="header">
            <h2>ToDoList</h2>
            <i className="fas fa-plus-circle" onClick={() => !adding && setAdding(true)}></i>
          </div>
          <div className="list">
            {todo !== null && todo.items.map((item, i) =>
              <div className="listItem" key={`item-${i}`}>
                <p className="title">{item.name}</p>
                <p className="content">{item.content}</p>
                <span className="createdAt">{item.createdAt.toLocaleString()}</span>
              </div>
            )}
            {adding &&
            <div className="listItem">
              <input type="text" placeholder="Nom..." value={itemName} onChange={(e) => setItemName(e.target.value)}/>
              <textarea rows={3} placeholder="Texte..." value={itemContent} onChange={(e) => setItemContent(e.target.value)}></textarea>
              <div className="footer">
                <span className="addItem" onClick={() => handleAdd()}>Ajouter</span>
                <span className="cancelItem" onClick={() => {
                  setAdding(false);
                  setItemName("");
                  setItemContent("");
                }}>Annuler</span>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
      }
    </div>
  );
}