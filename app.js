const courseNameInput = document.querySelector("#course-name");
const  courseRatingInput = document.querySelector('#course-rating');
const addButton = document.querySelector('#btnAdd');
const courseList = document.querySelector('#course-list');

addButton.addEventListener('click', handleEventAdd);


async function handleButtonAlert() {
    const alert = await alertController.create({
      header: 'Required Inputs',
      message: 'Please enter the name of course and it\'s rating!',
      buttons: ['Okay']
    });
  
    await alert.present();
}

function handleEventAdd(e){
    let courseName = courseNameInput.value;
    let courseRating = courseRatingInput.value;
    

    if(courseName.trim().length <= 0 || parseInt(courseRating, 10) > 5){
        handleButtonAlert();
        return;
    }

    const newCourse = document.createElement('ion-item');
    newCourse.textContent = `${courseName} : ${courseRating}/5`;
    courseList.appendChild(newCourse);
    clear();
}

function clear(){
    courseNameInput.value = '';
    courseRatingInput.value = '';
}