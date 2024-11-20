const lastmodifiedelement = document.getelementbyid("lastmodified");
const currentyearelement = document.getelementbyid("year");

const currentyear = new date().getfullyear();
currentyearelement.textcontent = ` ${currentyear} Tim Crager, WI`;

const lastmodifieddate = document.lastmodified;
lastmodifiedelement.textContent = `Last Modified: ${lastmodifieddate}`;