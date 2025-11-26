# Toodler - Task Management App

Toodler is a task management app built with React Native and Expo. The application provides a 3-tier organizational structure (Boards → Lists → Tasks) that allows users to organize their work efficiently with visual elements and great navigation.

This application was developed and tested for iOS devices.

**Note:** Extra Requirements are stated at the bottom

---

## Required Software

**Note:** This app is designed and tested for iOS. The instructions below are for macOS. If you're using Windows or Linux, you can still run the app using the Expo Go app on a physical device, but iOS Simulator will not be available.

### For macOS users:

1. **Node.js** (v14 or newer) - [Download here](https://nodejs.org/)
2. **Xcode** - Install from the Mac App Store (required for iOS Simulator)
3. **Expo CLI** - Install by running:
   ```bash
   npm install -g expo-cli
   ```
   
After installing Xcode, open it once and accept the license agreement.

### For Windows/Linux users:

1. **Node.js** (v14 or newer) - [Download here](https://nodejs.org/)
2. **Expo CLI** - Install by running:
   ```bash
   npm install -g expo-cli
   ```
3. **Physical iPhone** - You'll need an iPhone with Expo Go installed to test the app (iOS Simulator only works on macOS)

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bryndisgunnlaugsd/Toodler
   cd Toodler
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This downloads all required packages.

---

## Running the App

### On iOS Simulator (macOS only)

Start the development server and launch the simulator:
```bash
npx expo start --ios
```

Or start the server first and then press `i`:
```bash
npx expo start
# Press 'i' when prompted
```

the first launch could take few minutes :)

### On a Physical iPhone (Works on any OS)

1. Install "Expo Go" from the App Store on your iPhone
2. Start the development server:
   ```bash
   npx expo start
   ```
3. Scan the QR code with your iPhone's Camera app
4. The app will open in Expo Go

*Note:* *Your computer and iPhone must be on the same Wi-Fi network.*

---

## Features

- **3-tier organization**: Boards contain Lists, Lists contain Tasks
- **Visual boards**: Custom thumbnail images for each board
- **Color-coded lists**: Each list has a unique color for identification
- **Animations**: Logo animation on launch, button press feedback
- **CRUD operations**: Create, read, update, and delete for all items *(and move for Tasks)*
- **Intuitive navigation**: Clean back buttons and header layout

---

## Common Commands

```bash
# Start development server
npx expo start

# Start with cleared cache (fixes most issues)
npx expo start -c

# Open in iOS Simulator
npx expo start --ios

# Install new packages
npm install 
```

---

## Troubleshooting

### Simulator won't open
- Make sure Xcode is installed
- Open Xcode → Preferences → Locations
- Set "Command Line Tools" to the latest version

### App won't load on iPhone
- Ensure both devices are on the same Wi-Fi
- Restart the development server
- Try: `npx expo start --tunnel`

---

**Platform:** iOS  
**Designed for:** macOS (but can run on Windows/Linux using physical device)  
**Language:** TypeScript  
**Framework:** React Native with Expo

---

# Extra Requirements for Toodler

Beyond the core functionality requirements, the following additional features have been implemented

---

## 1. Landing Page Animation

**Implementation:**
The application features a smooth entry animation on the landing page (index screen).

**Animation Sequence:**
- The Toodler logo starts at 50% scale (0.5x)
- Logo smoothly scales up to full size (1.0x) using a ```spring``` animation
- After the logo animation completes, the "My Boards" button fades in gradually
- Button uses opacity animation from 0 to 1 over 600ms

**Technical Details:**
- Uses React Native's built-in Animated API
- Spring animation provides natural, bouncy motion
- Button press includes scale-down feedback (scales to 0.95x when pressed)
- No external animation libraries required

**User Experience:**
Creates a professional first impression and smooth app entry, making the application feel refined and intentional.

---

## 2. Color Picker for Lists

**Implementation:**
When creating or editing a list, users can select from a color palette using a color toggle interface.

**Features:**
- Color picker displays multiple color options
- Visual preview of selected color
- Selected color is applied to the list
- Colors persist in the application state

**Color Application:**
The chosen color appears as colored card for each list, making it easy to visually distinguish between different lists at a glance.

**User Experience:**
Provides personalization and improves visual organization, allowing users to categorize lists by color.

---

## 3. Swipe-to-Delete Tasks

**Implementation:**
Tasks can be quickly deleted using an intuitive left-swipe gesture.

**Interaction:**
- User swipes left on any task item
- Delete option/button appears
- By swiping all the way to left the button removes the task from the list
- Deletion is immediate and removes the task

**Technical Details:**
- Implemented using React Native Gesture Handler
- Smooth animation during swipe
- Visual feedback shows the delete action is available

**User Experience:**
Provides a familiar mobile pattern (similar to iOS Mail) for quick task removal, significantly improving efficiency compared to opening a menu or navigation to a separate delete screen.

---

## 4. Double Photo Options for Boards

**Implementation:**
When creating a new board, users have two methods for adding a thumbnail image.

**Options:**
1. **Take Photo**: Opens the device camera to capture a new photo
2. **Choose from Library**: Opens the photo gallery to select an existing image

**Technical Details:**
- Uses Expo's ImagePicker API
- Requests appropriate permissions (camera and photo library)
- Handles permission denials gracefully
- Image is stored and displayed as the board's thumbnail

**User Experience:**
Flexibility in image selection allows users to either capture something in the moment or use existing photos, making board creation more personal and visually engaging.

---

## 5. Custom Logo Design

**Implementation:**
A custom-designed logo has been created specifically for the Toodler application.

**Logo Design:**
- Name: "Toodler" 
- Visual Element: The second "o" in "Toodler" is replaced with a checkmark symbol inside a blue circle
- Style: Bold, modern typography with a clean, minimal design
- Colors: Black text with blue accent (checkmark circle)

**Design Rationale:**
- **Checkmark**: Represents task completion, the core function of a to-do app
- **Circle**: Provides a contained, balanced visual element
- **Color Choice**: Blue conveys productivity, trust, and organization

**Integration:**
- Logo appears on the landing page with animation
- Displayed in navigation headers for Boards

**User Experience:**
Creates brand identity and makes the app memorable. The visual connection between the logo's checkmark and the app's purpose (completing tasks) reinforces the application's function.

---
