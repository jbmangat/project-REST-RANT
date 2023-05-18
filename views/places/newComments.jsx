
const React = require("react");
const Def = require("../default");

function new_comment(props) {
  const placeId = props.placeId
  
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        <form method="POST" action={`/places/${placeId}/newComments`}> 
          <input type="hidden" name="placeId" value={placeId} />
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input 
              className="form-control" 
              id="author" 
              name="author" 
              required />
          </div>
          <div className="form-group">
            <label htmlFor="rant">Rant</label>
            <input 
              className="form-control" 
              id="rant" 
              name="rant" />
          </div>
          <div className="form-group">
            <label htmlFor="stars">Stars</label>
            <input 
              className="form-control" 
              id="stars" 
              name="stars" />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <input 
              className="form-control" 
              id="content" 
              name="content" />
          </div>
          <input className="btn btn-primary" type="submit" value="Add Comment" />
        </form>
      </main>
    </Def>
  );
}

module.exports = new_comment;

