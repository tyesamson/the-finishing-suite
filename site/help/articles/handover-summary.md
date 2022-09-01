---
title: Handover Summary
topic: Handover
tags:
 - Handover
 - Popular
date: 2000-01-01
---

**Introduction**

This section is a guide to best practices when preparing editorial deliverables for handing your timeline
over to The Finishing Suite for colour grading and online editing.

Because the exact process for generating these deliverable will differ from NLE to NLE, there are separate articles to guide you through the process of generating these deliverables for each NLE.

There will sometimes be exceptions to these guidelines — times when a more bespoke handover method is
required. If you think that might be the case for your job, please get in touch ASAP so that we can discuss further.

**Summary of requirements for DaVinci Resolve conforms**

The following deliverables will always be required by The Finishing Suite:

* Camera original media (OCN) or a pre-conformed working master
* Meta-only exchange file of video tracks (AAF, XML, EDL etc)
* Reference MOV of offline guide pictures with TCIP
* Sound mix or a reference WAV of the offline guide mix  

If relevant, please also include:

* Any fonts that have been used
* Source files for any motion graphics that are in the timeline
* High res copies of any archive material in the timeline
* High res copies of any still photographs that are in the timeline
* Graphics list document with timecodes and approved copy contained in graphics or titles  

It never hurts to put the offline project file on the drive as well, just in case. For Avid projects, this could
simply be a bin holding the locked sequence. Not strictly necessary, but good practice.

**External hard drives**

Where possible, please deliver your project on a single external hard drive or SSD, ideally with a USB type C
interface (left), and not requiring an external power supply. Micro USB type B interface (right) is also OK.

Please note that I cannot accept drives with a Thunderbolt interface, which can be confusing because
Thunderbolt versions 3 and 4 share a physical interface with USB type C. If you are handing over a drive
with a USB type C interface, please make sure that it is indeed USB 3.1 gen 2 and not Thunderbolt 3 or 4.

Please make sure that your drive is formatted via Windows (NTFS) or MacOS (APFS/HFS+) because I
cannot accept drives formatted using the Linux ext file systems for handover.

Please do not send USB cables, however, if you have no choice other than to send a drive with an external
power supply, absolutely do send the power supply along with the drive!

If you send a drive that is not labeled, please don’t be upset when you discover that I have labeled it myself.

**Media — OCN vs. preconformed working masters**

On almost all jobs, OCN is strongly preferred. For short-form jobs like
commercial TV spots and music videos especially, OCN should be manageable to hand over on a single
drive. When handing over OCN, please ensure that all camera-created directory structure and filenames
remain in-tact.

For long-form jobs, especially documentary or entertainment/factual shows with a high shooting ratio, it is
often not realistic to hand over your entire production’s worth of OCN. In these instances it is usually more
sensible to handover a pre-conformed timeline. There are two potential approaches to delivering a preconformed timeline:

If your timeline is cuts only, simply exporting a Prores 4444 or DNxHR 444 Quicktime MOV will almost
certainly be the easiest route. This will bake in any effects that you have applied in offline editing, so please
make sure that they are signed off as final and make sure to remove any timeline effects that will need to be
recreated during the finishing process. Any effects, whether baked into the MOV or removed, should be
documented with programme timecode in a note file and included with deliverables.

If your timeline is more complicated and has been cut in Avid Media Composer, you can hand over your
timeline as an AAF with consolidated media. This will include 99.9% of timeline effects in the metadata,
allowing for them to be interpreted and tweaked natively in Resolve. If you take this route, use the following
AAF export settings:

**Metadata exchange file**

As a general rule, if you are handing over OCN, then you will be sending your timeline as an AAF if coming
from Avid or an XML if coming from Premiere/FCPX.

A meta-only AAF linking to OCN will need to be exported with different settings than above:

If you are handing over a pre-conformed MOV, you must send an EDL of your timeline regardless of NLE.
The EDL should be in the CMX 3600 format.

**Offline Reference MOV**

For the offline picture reference, ProRes LT or DNxHR LB are the preferred codecs. As tempting as it might
be, please do not use any long-GOP codecs such as h.264.

Ideally, the reference MOV of your timeline will contain programme (“record”) timecode in picture (TCIP) top
right, as well as source timecode and clip name top left. Make the windows large enough to be legible but
small enough so as to cover as little of the picture as possible.

**Supported image types**

If you are handing over still images, please make sure that they are in a common file type. TIFFs are ideal for
high quality scans. JPGs are fine too, provided that they are large enough in dimensions and not overly
compressed. PNGs are great for any image that requires an embedded alpha channel.

Please do not handover images of the WebP, GIF, or HEIC file types. Please convert these prior to delivery.

**Notes on timeline hygiene**

Please ensure that the first pictures of your programme start at 10:00:00:00 on your timeline.

If your programme is an episode in parts, please make sure that the gap between parts is correct before
locking the edit. If the gap is supposed to be two seconds, then it needs to be two seconds to the frame,
not one second and 24 frames or two second and one frame!

Before exporting the AAF/XML, please make sure that all video tracks have been collapsed to one single
video track, with the only exception being where multiple video tracks are explicitly required for
superimpositions or other composite effects like split screens or graphics layers. No video track should
contain a mixture of video and graphics.

Do not include any audio tracks in AAFs for picture delivery. They are unnecessary and can greatly increase
the time it takes to conform the sequence.

If you’ve used Avid’s multicam tools in your edit, make sure that you right click on your sequence and select
“Commit Multicam Edits” before exporting the AAF.

In Avid, please don’t use the Picture In Picture effect for resizes. Parameters from Avid's Picture in Picture
effect do not translate into Resolve, which requires them to be painstakingly recreated one by one. If you
use the standard Resize effect to do resizes and repos, those parameters will come through automatically
and all the scaling will match without any manual intervention. This saves a huge amount of time!

If you’re working in Premiere, it is imperative that there are no nested clips anywhere in the sequence. If
you’ve used a “selects reel” timeline in your editing process, it’s possible that you may have inadvertently
cut nested clips into your timeline. Please check and make sure that any nested clips are matched back to
their original source clips before exporting the XML.

**Digital hygiene in general**

Please make sure that your drive has a clear and obvious directory structure. If there is any unrelated
content on the drive which cannot be removed prior to delivery, please label it as such so it is not accidentally
copied.

Please stick to only using alphanumeric characters or underscores in your project and avoid using special
characters at any stage of the process i.e. `~!@#$%^&*()-+=[{]}\|;:’”,<.>/? as these can wreak absolute havoc
on the conform and archiving processes.
