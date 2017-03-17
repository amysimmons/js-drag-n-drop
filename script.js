(function(){
  var image = document.querySelector('.dog');
  var dropZone = document.querySelector('.dropzone');

  function handleDragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.dropEffect = "move";
  }

  function handleDragOver(e){
    e.preventDefault();
  }

  function handleDrop(e){
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    var elem = document.getElementById(data);
    e.target.appendChild(elem);
    e.dataTransfer.clearData();
  }

  image.addEventListener('dragstart', handleDragStart)
  dropZone.addEventListener('dragover', handleDragOver)
  dropZone.addEventListener('drop', handleDrop)
})();