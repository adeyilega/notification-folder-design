const newNotification = document.querySelectorAll(".action-block")
const notificationList = document.querySelectorAll(".notification-block")
const newNotificationShowing = document.querySelector("#NEW-NOTIFICATIONS")
const markButt = document.querySelector("#MARK-READ")
const unread = "unread-notification"
let newNotficationNumber = 0


const readNotification = function (notification) {
  if (notification.classList.contains(unread) ) {
    removeNewNotificationElements(notification)
    newNotficationNumber--
    showNotificationNumber()
  }
}

const removeNewNotificationElements = function (notification) {
  notification.classList.remove(unread)
  let ball = notification.querySelector(".action-block > div > p > span:last-of-type")
  ball.classList.add("read-ball")
}

const readAll = function () {
  for (const notification of notificationList) {
    if (notification.classList.contains(unread)) {
      removeNewNotificationElements(notification)
      newNotficationNumber = 0
      showNotificationNumber()
    }
  }
}

const showNotificationNumber = function () {
  newNotificationShowing.textContent = newNotficationNumber
}

const assignEventListners = function () {
  for (const notification of notificationList) {
    notification.addEventListener("click", readNotification.bind(this, notification))
    if (notification.classList.contains("unread-notification")) {
      newNotficationNumber++
    }
  }
}


assignEventListners()
markButt.addEventListener("click", readAll)
showNotificationNumber()