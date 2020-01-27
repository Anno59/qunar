let state = {
  city: ''
};
try {
  state.city = localStorage.city || state.city;
}catch (e) {

}

export default state;
