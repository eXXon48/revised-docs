# Update to 74.00.324A

The Revised Store and its apps are built for Mazda Connect (CMU150) firmware **74.00.324A**, European version. This guide takes the unit there with Mazda's own update procedure.

::: danger Do not let the power drop
The update rewrites the unit's whole system. If the ignition turns off or the battery sags in the middle of it, the unit can stop working and need replacing. Read the [power](#keep-the-power-on) part before you start.
:::

## Check your version first

On the car's screen: **Settings → System → About → Version Info**.

- Shows **74.00.324A**: you are done, go to [[install-store|Install the Store]].
- Shows an older **70.00.335** or later: follow this guide.
- Shows something older than **70.00.335**: these units first need a separate Fail-safe package. This guide does not cover that case.

## Get the update file

Mazda gives the update files only to its dealers. We cannot host the file here: the firmware is Mazda's intellectual property.

Owners share it in the firmware thread on the CX-5 owners' forum. Download it from there.

Check that you have the right file, unchanged:

| | |
|---|---|
| File name | `cmu150_EU_74.00.324A_update.up` |
| Size | 2 432 208 800 bytes |
| MD5 | `9b841bc807a5010a8652bb3b9e894f91` |

Get the MD5 of your copy:

- Windows: `certutil -hashfile cmu150_EU_74.00.324A_update.up MD5`
- macOS: `md5 cmu150_EU_74.00.324A_update.up`
- Linux: `md5sum cmu150_EU_74.00.324A_update.up`

If the size or the MD5 differ, do not use the file. Download it again.

The file must end in **`.up`**. If yours ends in `.zip`, rename it to `.up`; do not unzip it.

## Put it on a stick

[[usb-stick|Prepare a USB stick]] of 8 GB or more, formatted FAT32. Then copy the `.up` file to the top level of the stick. Put nothing else on it: with one file there, the car cannot pick the wrong one.

## What the update resets

- All settings go back to factory: sound, display, radio favourites, navigation favourites.
- Paired phones are forgotten. Before you pair a phone again, remove **Mazda** from the phone's Bluetooth list, or it will not pair.
- Everything installed from the Revised Store is removed. Install the Store again afterwards.

Write down your radio favourites now if you want them back.

## Keep the power on

The update takes about 40–50 minutes. For all of it:

- Keep the ignition in **ACC**. Not ON, and never start the engine.
  To get ACC, press the START button once **without** pressing the brake (automatic) or the clutch (manual).
- Connect a battery charger in power-supply mode if you have one. A weak battery is the most common way to ruin an update.
- Switch off what draws current: air conditioning fan, rear window heater, interior lights.
- The car turns ACC off by itself after 25 minutes. **Press and release the brake pedal (automatic) or the clutch pedal (manual) every 15–20 minutes** to restart that timer. Set a timer on your phone.

## Run the update

### 1. Get the unit ready

1. Switch the ignition off.
2. Take out the navigation SD card. Unplug everything from the USB and AUX ports. Disconnect phones.
3. Switch to ACC. Wait until the system has started, then turn on the FM radio.

### 2. Clear the unit's fault memory

Mazda does this before every update so old fault codes do not get in the way.

1. Press and hold **Music + Favourites + Mute** on the commander together for 2–5 seconds. A diagnostic screen opens.
2. Enter **3**, choose **ENTER**, then **CLEAR**.
3. Enter **2**, choose **ENTER**, then **CLEAR**, then **EXIT**.

### 3. Let the unit sleep

1. Switch the ignition off.
2. Close all doors, lock the car with the remote, and take all keys at least 5 metres away.
3. Wait 3 minutes. The unit goes fully to sleep.

### 4. Start the update

1. Unlock the car and switch to ACC.
2. Plug the stick into a USB port. Leave the other port empty. A message shows that the stick was found.
3. Hold **Music + Favourites + Mute** for 2–5 seconds again.
4. Enter **99** and choose **ENTER**.
5. Choose **Search**. The update on the stick is listed.
6. Choose **Update Package**, then **Update**.

### 5. Wait

The screen shows "Preparing", then goes black, then white, then shows a progress bar from 0 to 100 %.

- The bar stops for several minutes around 12 % and 91 %, and again near the end. That is normal. Wait.
- The screen can get dark. It still says not to restart the car: do not.
- Keep pressing the brake or clutch pedal every 15–20 minutes.

### 6. Finish

1. At 100 % the screen asks to restart. **Do not start the engine.** Switch the ignition off without pressing any pedal.
2. Take out the stick. Lock the car, take the keys 5 metres away, and wait 3 minutes again.
3. Unlock, switch to ACC, and touch nothing for one minute while the unit sets itself up.
4. Check **Settings → System → About → Version Info**: it shows **74.00.324A**.
5. Optional: open the diagnostic screen, enter **3**, **ENTER**, and check that no fault codes are left.
6. Put the navigation SD card back. Open the map: if the position is wrong, drive a short way at 15 km/h or more until it corrects itself.

Then [[install-store|Install the Store]].

## If something goes wrong

**The car switched off during the update.** Switch back to ACC. The update continues on its own. If nothing moves after 1–2 minutes and the stick has a light that is not blinking, take the stick out and plug it in again.

**The screen stays white or freezes and never finishes.**

1. Switch the ignition off. Do not start the engine.
2. Wait until the screen is black, then take out the stick.
3. Remove the **ROOM** fuse in the engine-bay fuse box, wait one minute, and put it back.
4. Switch to ACC. Do not start the engine.
5. When the unit shows its update screen, plug the stick in again. The update starts again.
6. Then go on with [Finish](#_6-finish).

::: tip Source
These steps follow Mazda's dealer update procedure for Mazda Connect 70.00.335 and later, in our own words. Mazda's own bulletin is the reference.
:::
