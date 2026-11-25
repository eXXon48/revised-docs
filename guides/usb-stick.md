# Prepare a USB stick

The car reads sticks formatted **FAT32**. Use a stick of 8–32 GB. Bigger sticks work too, but Windows does not offer FAT32 for them.

::: warning Formatting erases the stick
Copy off anything you want to keep first.
:::

## Windows

1. Plug in the stick and open **File Explorer**.
2. Right-click the stick → **Format…**
3. File system: **FAT32**. Leave "Quick Format" on. Choose **Start**.

## macOS

1. Open **Disk Utility** and select the stick (the device, not the volume under it).
2. Choose **Erase**.
3. Format: **MS-DOS (FAT)**. Scheme: **Master Boot Record**. Choose **Erase**.

## Linux

Find the device with `lsblk`, then (replace `sdX1` with your stick's partition):

```sh
sudo mkfs.vfat -F 32 /dev/sdX1
```

## Copy the files

- Copy the files to the **top level** of the stick, not into a folder.
- Put only what the guide asks for on the stick.
- Eject the stick safely before you pull it out, or the last file may be cut short.
