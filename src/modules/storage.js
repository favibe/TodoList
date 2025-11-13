const Storage = {
  save(data) {
    localStorage.setItem("todoApp", JSON.stringify(data));
  },

  load() {
    const stored = localStorage.getItem("todoApp");
    return stored ? JSON.parse(stored) : null;
  }
};

export default Storage;
