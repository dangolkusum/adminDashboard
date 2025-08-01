const profilePics = document.querySelectorAll(".profile-picture");
profilePics.forEach(profilePic => {
    const pic = document.createElement('img');
pic.src = 'images/cat.jpg';
pic.alt = "loading.";
profilePic.appendChild(pic);
});

const usernames = document.querySelectorAll(".username");
const firstname = 'Kusum';
const lastname = "Dangol"
usernames.forEach(username => {
    username.textContent = firstname + " "+ lastname;
});
const downUsername = document.querySelector('.header-down-username');
downUsername.textContent = firstname +" "+lastname+" (@"+ firstname+")";

//main contents
const contents = [
  {
    title: "The Power of Simplicity",
    description: "Learn how simplifying tasks can lead to greater efficiency and peace of mind."
  },
  {
    title: "Building Daily Habits",
    description: "Explore the importance of consistency and how small habits create big change."
  },
  {
    title: "Time Management 101",
    description: "Practical tips to prioritize your day and get more done with less stress."
  },
  {
    title: "Overcoming Procrastination",
    description: "Understand the root causes of delay and how to take action immediately."
  },
  {
    title: "Creative Thinking",
    description: "Stimulate your imagination and find innovative solutions to everyday problems."
  },
  {
    title: "Growth Mindset",
    description: "Discover how embracing challenges and failures helps you grow stronger and smarter."
  }
];

const mainContent = document.querySelector('.main-content');
contents.forEach( content => {

    const box = document.createElement('div');
    box.className = 'box';
    mainContent.appendChild(box);


    const contentContainer = document.createElement('div');
    contentContainer.className = "content-container";
    box.appendChild(contentContainer);

    const passage = document.createElement('div');
    passage.className = 'passage';
    contentContainer.appendChild(passage);

    const iconList = document.createElement('div');
    iconList.className = 'icon-list';
    contentContainer.appendChild(iconList);

    const title = document.createElement('p');
    const description = document.createElement('p');
    
    title.id = 'title';
    description.id = 'description';
    title.textContent = content.title;
    description.textContent = content.description;

    passage.appendChild(title);
    passage.appendChild(description);

    for(let j = 0; j < 3; j++){
        const img = document.createElement('img')
        img.className = 'icon';
        if(j==0){
            img.src = 'icons/star-plus-outline.svg';
        }else if(j==1){
            
            img.src = 'icons/eye-plus-outline.svg';
        }else{
            img.src = 'icons/source-fork.svg';
        }
        iconList.appendChild(img);
    }


});
    


//side-content announcements
const items = [
  {
    title: "Site Maintainance",
    description: "We've added a new feature to improve user experience."
  },
  {
    title: "Community Share Day",
    description: "Scheduled maintenance will occur this Sunday from 2 AM to 4 AM."
  },
  {
    title: "Updated Privacy Policy",
    description: "Welcome to our platform! We’re glad to have you here."
  }
];

const message = document.querySelector('.a-list');
items.forEach(item =>{
    const div = document.createElement('div');
    div.className = "one";
    message.appendChild(div);

    const topic = document.createElement('p');
    const descrip = document.createElement('p');

    topic.className = 'topic';
    topic.textContent = item.title;
    descrip.className = 'descrip';
    descrip.textContent = item.description;

    div.appendChild(topic);
    div.appendChild(descrip);
});

//trending
const accounts = [
  {
    accountName: "@john_doe",
    imagePath: "images/noface.webp",
    bio: "Coffee. Code. Chill."
  },
  {
    accountName: "@emma_smith",
    imagePath: "images/moon.jpg",
    bio: "Design. Travel. Create."
  },
  {
    accountName: "@alex_92",
    imagePath: "images/river.jpeg",
    bio: "Build. Break. Repeat."
  },
  {
    accountName: "@nina.rose",
    imagePath: "images/chihiro.jpg",
    bio: "Read. Reflect. Rise."
  }
];


const trending = document.querySelector('.t-list');
accounts.forEach(account => {
    const acc = document.createElement('div');
    acc.className ='account';
    trending.appendChild(acc);

    const img = document.createElement('img');
    img.src = account.imagePath;
    acc.appendChild(img);

    const info = document.createElement('div');
    info.className = "acc-info";
    acc.appendChild(info);

    const accName = document.createElement('p')
    const bio = document.createElement('p');

    accName.className = 'account-name';
    bio.className = 'bio';
    accName.textContent = account.accountName;
    bio.textContent = account.bio;

    info.appendChild(accName);
    info.appendChild(bio);

})