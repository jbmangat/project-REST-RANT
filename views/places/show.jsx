const React = require('react')
const Def = require('../default')

function show ({ place }) {
    // console.log('------')
    let comments = (
      <h3 className='inactive'>
        No comments yet!
      </h3>
    )
    if (place.comments.length) {
      comments = place.comments.map(c => {
        return (
          <div className="border" key={c._id}>
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
          <main key={place._id}>
            <h1>{place.name}</h1>
            <h2>Rating</h2>
              <p>Not rated</p>
            <img src={place.pic} alt={place.name} />
            <h3>Located in {place.city}, {place.state} and serving {place.cuisines}</h3>
            <h2>Description</h2>
            <h3>{place.showEstablished()}</h3>
            <h4>Serving {place.cuisines}</h4>
            <h2>Comments</h2>
            {comments}
          </main>
          <a href={`/places/${place.id}/newComments`} className="btn btn-warning">
            Add Comment
          </a>
          <a href={`/places/${place.id}/edit`} className="btn btn-warning"> 
            Edit
          </a>     
          <form method="POST" action={`/places/${place.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>     
        </Def>
    )
}

module.exports = show




