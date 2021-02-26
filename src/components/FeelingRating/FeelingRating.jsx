function FeelingRating(){
  return(
    <>
      <h2>How are you feeling today?</h2>
      <form>
        <input type="number" placeholder="1-5" max="5" />
        {/* TODO - history.push to Understanding */}
        <button>Next</button>
      </form>
    </>
  );
}

export default FeelingRating;