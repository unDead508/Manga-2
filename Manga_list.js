const mangaList = [
  {
    name: "One Piece",
    folder: "one_piece",
    cover: "cover/onepeice.jpg"
  },
];

// Example: Display all manga info
mangaList.forEach(manga => {
  console.log(`Name: ${manga.name}`);
  console.log(`Folder: ${manga.folder}`);
  console.log(`Cover: ${manga.cover}`);
  console.log('---');
});