function TaskShow({ task }) {
  console.log(task);
  return <div className="task-show">
    <h3>Göreviniz</h3>
    <p>{task.title}</p>
    <h3>Yapılacaklar</h3>
    <p>{task.taskDec}</p>
    <button>Sil</button>
  <button>Güncelle</button>
  </div>;
  
}

export default TaskShow;
