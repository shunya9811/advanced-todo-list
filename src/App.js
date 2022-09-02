import './App.css';

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function App() {
  return (
    <div className="App">
      <h1>Advanced Todo List</h1>
      
      <div className='topPage page'>
        <div className='header'>
          <h2>Calendar</h2>
          <div className='selectBar'>
            <h3>category</h3>
            <select>
              <option value="all">all</option>
              <option value="school">school</option>
              <option value="work">work</option>
            </select>
          </div>
        </div>
        <div className='calendar'></div>
        <div className='header'>
          <h2>Today's todo</h2>
          <div className='selectBar'>
            <h3>priority</h3>
            <select >
              <option value="top priority">Top priority</option>
              <option value="high priority">High priority</option>
              <option value="low priority">Low priority</option>
            </select>
          </div>
        </div>
        <div className='todoCards'>
          <div className='todoCardContainer'>
            <div className='cardHeader'>
              <p className='cardTitle'>Todo title</p>
            </div>
            <div className='cardContent'>
              <div className='cardText'>
                <p>Category</p>
                <p>School</p>
              </div>
              <div className='cardText'>
                <p>priority</p>
                <p>1~3</p>
              </div>
              <div className='cardText'>
                <p>Time</p>
                <p>11:12-13:15</p>
              </div>
            </div>
            <div className='cardFooter'>
              <div className='cardBtn'>
                <IconButton>
                  <FavoriteIcon
                    fontSize='large'
                  />
                </IconButton>
                <IconButton>
                  <DeleteForeverIcon
                    fontSize='large'
                  />
                </IconButton>
              </div>
              <div>
                <p>Show More</p>
              </div>
            </div>
          </div>
          <div className='todoCardContainer'>
            <div className='cardHeader'>
              <p className='cardTitle'>Todo title</p>
            </div>
            <div className='cardContent'>
              <div className='cardText'>
                <p>Category</p>
                <p>School</p>
              </div>
              <div className='cardText'>
                <p>priority</p>
                <p>1~3</p>
              </div>
              <div className='cardText'>
                <p>Time</p>
                <p>11:12-13:15</p>
              </div>
            </div>
            <div className='cardFooter'>
              <div className='cartBtn'>
                <IconButton>
                  <FavoriteIcon/>
                </IconButton>
                <IconButton>
                  <DeleteForeverIcon/>
                </IconButton>
              </div>
              <div>
                <p>Show More</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/*
      <div className='todoListPage page'>
        <div className='header'>
          <h2>00/00's todo</h2>
          <div className='selectBar'>
            <h3>Priority</h3>
            <select>
              <option value="top priority">top priority</option>
              <option value="high priority">high priority</option>
              <option value="low priority">low priority</option>
            </select>
          </div>
        </div>
        <div className='todoCards'>
          <div className='todoCardContainer'>
            <div className='cardHeader'>
              <p className='cardTitle'>Todo title</p>
            </div>
            <div className='cardContent'>
              <div className='cardText'>
                <p>Category</p>
                <p>School</p>
              </div>
              <div className='cardText'>
                <p>priority</p>
                <p>1~3</p>
              </div>
              <div className='cardText'>
                <p>Time</p>
                <p>11:12-13:15</p>
              </div>
            </div>
            <div className='cardFooter'>
              <div className='cartBtn'>
                <IconButton>
                  <FavoriteIcon
                    fontSize='large'
                  />
                </IconButton>
                <IconButton>
                  <DeleteForeverIcon
                    fontSize='large'
                  />
                </IconButton>
              </div>
              <div>
                <p>Show More</p>
              </div>
            </div>
          </div>
          <div className='todoCardContainer'>
            <div className='cardHeader'>
              <p className='cardTitle'>Todo title</p>
            </div>
            <div className='cardContent'>
              <div className='cardText'>
                <p>Category</p>
                <p>School</p>
              </div>
              <div className='cardText'>
                <p>priority</p>
                <p>1~3</p>
              </div>
              <div className='cardText'>
                <p>Time</p>
                <p>11:12-13:15</p>
              </div>
            </div>
            <div className='cardFooter'>
              <div className='cartBtn'>
                <IconButton>
                  <FavoriteIcon/>
                </IconButton>
                <IconButton>
                  <DeleteForeverIcon/>
                </IconButton>
              </div>
              <div>
                <p>Show More</p>
              </div>
            </div>
          </div>
          <div className='todoCardContainer'>
            <div className='cardHeader'>
              <p className='cardTitle'>Todo title</p>
            </div>
            <div className='cardContent'>
              <div className='cardText'>
                <p>Category</p>
                <p>School</p>
              </div>
              <div className='cardText'>
                <p>priority</p>
                <p>1~3</p>
              </div>
              <div className='cardText'>
                <p>Time</p>
                <p>11:12-13:15</p>
              </div>
            </div>
            <div className='cardFooter'>
              <div className='cartBtn'>
                <IconButton>
                  <FavoriteIcon/>
                </IconButton>
                <IconButton>
                  <DeleteForeverIcon/>
                </IconButton>
              </div>
              <div>
                <p>Show More</p>
              </div>
            </div>
          </div>
          <div className='todoCardContainer'>
            <div className='cardHeader'>
              <p className='cardTitle'>Todo title</p>
            </div>
            <div className='cardContent'>
              <div className='cardText'>
                <p>Category</p>
                <p>School</p>
              </div>
              <div className='cardText'>
                <p>priority</p>
                <p>1~3</p>
              </div>
              <div className='cardText'>
                <p>Time</p>
                <p>11:12-13:15</p>
              </div>
            </div>
            <div className='cardFooter'>
              <div className='cartBtn'>
                <IconButton>
                  <FavoriteIcon/>
                </IconButton>
                <IconButton>
                  <DeleteForeverIcon/>
                </IconButton>
              </div>
              <div>
                <p>Show More</p>
              </div>
            </div>
          </div>
          <div className='todoCardContainer'>
            <div className='cardHeader'>
              <p className='cardTitle'>Todo title</p>
            </div>
            <div className='cardContent'>
              <div className='cardText'>
                <p>Category</p>
                <p>School</p>
              </div>
              <div className='cardText'>
                <p>priority</p>
                <p>1~3</p>
              </div>
              <div className='cardText'>
                <p>Time</p>
                <p>11:12-13:15</p>
              </div>
            </div>
            <div className='cardFooter'>
              <div className='cartBtn'>
                <IconButton>
                  <FavoriteIcon/>
                </IconButton>
                <IconButton>
                  <DeleteForeverIcon/>
                </IconButton>
              </div>
              <div>
                <p>Show More</p>
              </div>
            </div>
          </div>
          <div className='todoCardContainer'>
            <button className='addTodoButton'></button>
            <p className='addTodoText'>Add Todo</p>
          </div>
        </div>
      </div>
      */}
      {/*
      <div className='todoDetailPage page'>
        <h2 className='todoDetailHeader'>Todo</h2>
        <div className='todoDetailContainer'>
          <h2 className='todoDetailTitle'>Todo title</h2>
          <div className='information'>
            <div className='item'>
              <p>Category</p>
              <p>School</p>
            </div>
            <div className='item'>
              <p>Priority</p>
              <p>1~3</p>
            </div>
            <div className='item'>
              <p>Time</p>
              <p>11:23~13:21</p>
            </div>
            <div className='item'>
              <p>Place</p>
              <p>Univercity</p>
            </div>
          </div>
          <h3 className='todoDetailTitle'>Detail</h3>
          <textarea placeholder='detail' disabled></textarea>
          <div className='cardFooter'>
            <div className='cardBtn'>
              <IconButton>
                <FavoriteIcon
                  fontSize='large'
                />
              </IconButton>
              <IconButton>
                <DeleteForeverIcon
                  fontSize='large'
                />
              </IconButton>
            </div>
            <button className='btn'>Edit Todo</button>
          </div>
        </div>
      </div>
    */} 
      {/*
      <div className='editTodoPage page'>
        <h2 className='todoDetailHeader'>Create Todo (Edit Todo)</h2>
        <div className='todoDetailContainer'>
          <div className='titleCon'>
            <p>Title</p>
            <input type="text" placeholder='Title' className='titleInput'></input>
          </div>
          <div className='information'>
            <div className='item'>
              <p>Category</p>
              <input type="text" placeholder='Category' className='infoInput'></input>
            </div>
            <div className='item'>
              <p>Priority</p>
              <input type="number" placeholder='Priority(1~3)' min="1" max="3" className='infoInput'></input>
            </div>
            <div className='item'>
              <p>Time</p>
              <input type="text" placeholder='00:00~00:00' className='infoInput'></input>
            </div>
            <div className='item'>
              <p>Place</p>
              <input type="text" placeholder='Place' className='infoInput'></input>
            </div>
          </div>
          <h3 className='todoDetailTitle'>Detail</h3>
          <textarea></textarea>
        </div>
        <div className='btnCon'>
          <button className='btn'>Create Todo</button>
        </div>
      </div>
    */}
    </div>
  );
}

export default App;
