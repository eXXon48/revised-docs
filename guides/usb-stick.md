# Prepare a USB stick

The car only reads sticks formatted as **FAT32**. Formatting sets that up. It takes one minute.

**What you need:** a USB stick of **8 to 32 GB**. Bigger sticks also work in the car, but Windows will not offer FAT32 for them.

::: warning Formatting erases everything on the stick
Copy off any files you want to keep before you start.
:::

## Windows

1. Plug the stick into the computer.
2. Open **File Explorer**: press the **Windows key + E**.
3. On the left, click **This PC**. Your stick is listed under "Devices and drives", usually as **USB Drive** with a letter such as **D:** or **E:**.
   Check the size shown under it: it must match your stick (for example "14.4 GB" for a 16 GB stick). This way you do not format the wrong drive.
4. **Right-click** the stick and choose **Format…**
   (On Windows 11, you may first need to click **Show more options**.)
5. A small "Format" window opens. Set:
   - **Capacity**: the size of your stick. If it shows a different size, close the window: you picked the wrong drive.
   - **File system**: choose **FAT32**. If FAT32 is not in the list, the stick is bigger than 32 GB: use a smaller stick.
   - **Volume label**: anything, or leave it empty.
   - **Quick Format**: leave the tick on.
6. Click **Start**. Windows warns that all data will be erased: click **OK**.
7. Wait for "Format Complete" and click **OK**. Close the Format window.

## macOS

1. Plug the stick into the Mac.
2. Open **Disk Utility**: press **Cmd + Space**, type `Disk Utility`, press **Enter**.
3. In the menu bar choose **View → Show All Devices**.
4. In the left column, under "External", click the **stick itself** (the top line with the maker's name, for example "SanDisk Ultra Media"), not the line indented under it.
   Check the size on the right: it must match your stick.
5. Click **Erase** at the top. Set:
   - **Name**: anything, for example `MAZDA`.
   - **Format**: **MS-DOS (FAT)**.
   - **Scheme**: **Master Boot Record**.
6. Click **Erase**, wait, and click **Done**.

## Linux

1. Plug in the stick and find it: run `lsblk`. Your stick is the device with its size, for example `sdb` with a partition `sdb1`.
2. Unmount it, then format it (replace `sdb1` with yours; a wrong name erases another disk):

```sh
sudo umount /dev/sdb1
sudo mkfs.vfat -F 32 -n MAZDA /dev/sdb1
```

## Copy the files and eject

1. Open the stick in File Explorer (Windows) or Finder (macOS).
2. Copy the files the guide asks for **straight onto the stick**, not into a folder.
3. Put nothing else on it.
4. Wait until copying has finished. A 2.4 GB file takes a few minutes.
5. **Eject** the stick before you pull it out:
   - Windows: right-click the stick in File Explorer → **Eject**.
   - macOS: drag the stick to the Trash, or click the eject arrow next to it in Finder.

   Pulling it out without ejecting can leave the last file cut short, and the car will refuse it.
