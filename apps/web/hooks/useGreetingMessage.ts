const greetingMessages = [
  "Good night,",
  "Good evening,",
  "Good afternoon,",
  "Hey there,",
  "Good day,",
  "Welcome,",
  "Good morning,",
  "Hello,",
] as const;

export type greetingMessage = typeof greetingMessages[number];

export default function chooseGreetingMessage(): greetingMessage {
  // Get time in 24h and select greeting
  const time = new Date().getHours();
  if (time >= 20) {
    return greetingMessages[0];
  } else if (time >= 18) {
    return greetingMessages[1];
  } else if (time >= 15) {
    return greetingMessages[4];
  } else if (time >= 9) {
    // Select a random message from Welcome, Good day and Hey there
    const index = 3 + Math.floor(Math.random() * 2);
    return greetingMessages[index];
  } else if (time >= 3) {
    return greetingMessages[6];
  } else {
    return greetingMessages[7];
  }
}
