let state = {
  city: '北京'
};
try {
  state.city = localStorage.city || state.city;
}catch (e) {}

export default state;
