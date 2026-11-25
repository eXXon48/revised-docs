# Install the Store

One USB stick, once. After that you install and update everything from the car's own screen.

::: warning The Store needs internet
The car gets apps, updates and your account over the internet. Without a connection the Store cannot link the car or install anything. The car goes online through your phone's Wi-Fi hotspot, see [step 3](#online).
:::

::: info The install stick is being reworked
The download opens with the first public release. The steps below can still change.
:::

## You need

- Mazda Connect (CMU150) on firmware **74.00.324A**. Not there yet? [[update-firmware|Update to 74.00.324A]] first.
- A [[usb-stick|USB stick]] formatted FAT32, empty.
- The car on, so the battery does not run down while it installs.
- A phone that can share its mobile data as a **Wi-Fi hotspot**.

## 1. Prepare the stick

Download the stick files and unzip them onto the empty stick, so the files sit at its top level.

## 2. Install from the stick

1. Plug the stick into the car's USB port with the screen on. A menu appears after a few seconds.
2. Select **Revised Store** and choose **Done**. The stick first checks that the system is stock, then installs the safety net and the Store.
3. When it asks, let the screen restart. Then take the stick out.

## 3. Connect the car to the internet {#online}

This is required. The Store works only while the car is online.

1. On the phone: turn on the **Wi-Fi hotspot** (Android: Settings → Hotspot and tethering; iPhone: Settings → Personal Hotspot, and turn on "Allow Others to Join"). Note the hotspot name and password.
2. On the car: **Settings → Devices → Wi-Fi**. Turn Wi-Fi on.
3. Pick your phone's hotspot in the list and enter its password.
4. Wait until the car shows it is connected.

The car remembers the hotspot. Next time, turn on the hotspot on the phone and the car joins it by itself.

The Store uses your phone's mobile data.

## 4. Link your car

See [[link-car|Link your car]].

## Going back

- Remove an app in the Store: the car goes back to how it was before.
- If the car fails to start 3 times in a row, it rolls itself back. No stick needed.
