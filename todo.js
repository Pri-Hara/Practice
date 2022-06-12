//タスクの入力欄の要素を取得
const taskValue = document.getElementsByClassName('task_value')[0];
//タスク登録のためのボタン要素を取得
const taskSubmit = document.getElementsByClassName('task_submit')[0];
//タスクを表示させるための空のリスト要素を取得
const taskList = document.getElementsByClassName('task_list')[0];

//addTasks関数
//追加ボタンを生成
const addTasks = (task) => {
    //入力したタスクを追加・表示
    const listItem = document.createElement('li'); //要素(li)を生成
    const showItem = taskList.appendChild(listItem); //appendChildで子要素を追加している
    showItem.innerHTML = task; //入力したタスクの表示

    //タスクに削除ボタンを付与
    const deleteButton = document.createElement('button'); //ボタン(button)を生成
    deleteButton.innerHTML = '削除';
    listItem.appendChild(deleteButton); //削除ボタン要素をlistItemの子要素として追加

    //削除ボタンをクリックした際のイベントを用意
    //削除ボタンをクリックし、イベントを発動する（リストのタスクが削除される）
    deleteButton.addEventListener('click', event => {
        event.preventDefault();
        deleteTasks(deleteButton); //削除ボタンをクリックしたらdeleteTasks関数が呼び出される
    });
};

//deleteTasks関数
//削除ボタンにタスクを消す機能を付与
const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('li');
    taskList.removeChild(chosenTask); //親要素から見た子要素を削除
};


//以下はいわばmain関数みたいなもの(?)
//追加ボタンをクリックした際のイベントを用意
//追加ボタンをクリックし、イベントを発動する（タスクが追加される）
taskSubmit.addEventListener('click', event => {
    event.preventDefault();
    const task = taskValue.value;
    addTasks(task); //追加ボタンをクリックしたらaddTasks関数が呼び出される
    taskValue.value = ''; //ボタンを押すたびに入力欄を空白にする
});