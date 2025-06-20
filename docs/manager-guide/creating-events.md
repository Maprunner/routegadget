---
title: "Creating events"
---

:::tip

There is an [introductory video](http://screencast-o-matic.com/u/VJsd/RG2-Cassiobury-Manager-Demo) that shows an event being set up.

:::

## Stages in adding an event

![Adding an event](../img/add-event.png)

### Event details

- Name: Enter the event name. It is helpful to include the map name since this makes finding past events on the same area much easier. So prefer `Ace of Herts: Ashridge` over `Ace of Herts`. The date of the event will be included automatically on the Event tab.
- Map: Select a map from the dropdown menu. Maps must be added through the [Map tab](./maps) before an event can be set up. It is possible to reuse previously uploaded maps by selecting from the dropdown menu.
- Club: Enter the organising club.
- Date: Select the event date.
- Level: Select the event level from the dropdown menu.
- Comments: Add any comments you want to make.

### Results file

![Results file](../img/results-file.png)

Select the results file to be used.

#### Events with no results

The checkbox option for `No results file` allows you to set up an event with no results file. Results will instead be created when each runner draws or uploads a route.

#### Result file sorting

The checkbox option for `Sort results file` should not normally be needed, and it is better to make sure that the results file itself is sorted as you want it. If you do use the checkbox then it will sort by course, then position, then time and then name. If your results file is by class and several classes run one course then sorting within Routegadget is not a good idea, since all the position 1s will come first, followed by all the position 2s and so on.

### Course file

![Course file](../img/course-file.png)

Select the course file to be used.

#### Relays, score events and butterfly loops

The default event set-up assumes that courses are line courses where every runner visits the same controls in the same order. For other types of event select the `Individual courses` checkbox.

:::info
This checkbox applies to all courses for a Routegadget event. If you put on an event which has line courses and score courses then it it is best to set it up as two separate events in Routegadget.
:::

:::tip

If you are setting up a score course you must have a course defined within the XML file. You cannot just have the list of controls, start and finish, even though this is potentially enough to print the map. Check that you have the following section in the XML:

```
<Course>
  <CourseName>1hr Score</CourseName>
  <CourseId>0</CourseId>
  <CourseVariation>
     ... course details
  </CourseVariation>
</Course>
```

:::

#### Adding class information

If your course file is set up with course names and a mapping to classes then the `Add classes to course names` checkbox will be enabled. This will update the saved course name to include classes. You can see how this will appear in the [result to course mappings](#map-results-to-courses).

#### Aligning controls to the map

If you have a georeferenced map and course file then the controls will be automatically aligned when you import them.

If the map is not georeferenced then the controls and map will need to be manually aligned:

1. Select two controls to reposition to align all controls. (For example bottom-left and top-right controls on map).
2. **Click-and-drag** a control to its correct location on the map and release the click. (Note: left-click-and drag moves the controls layer. right-click-and-drag moves the map layer. Use the `Move map and controls together` checkbox to drag both layers.)
3. **Click-to-lock** - Lock that control in its position by single-clicking the control. The control will display a red-dot indicator to show it is locked.
4. **Click-and-drag** another control to its correct location on the map and release the click. All controls will scale to fit.
5. Single-click the red-dot locked indicator to unlock it.
6. Check the other control positions and if needed use the click-and-drag or lock-and-resize to get all controls placed correctly.

#### Drawing a course

The `Draw course` button allows you to draw a course if you do not have a course file available. This has very limited functionality and only supports one course for an event. It is intended to be used for low-key events with no splits, so that the course just consists of a start and a finish.

### Map results to courses

![Map results to course](../img/results-course-mapping.png)

These dropdown boxes are only displayed once you have loaded results and courses.

If the results file and course file uses the same names for each course then this mapping will be done automatically. If not then you can set the required mapping using the dropdowns.

:::tip
It is possible to select `Do not save` in the dropdown. This allows you to include only some of the courses and results. For example, this might be useful if shorter courses used a different map and will be set up as a different event.
:::

### Create the event

![Create event](../img/create-event.png)

Select the `Read-only` checkbox if required. People will be able to see the map, courses and results but they will not be able to draw routes. This will allow you to check that everything has been set up correctly. The event can also be locked and unlocked on the [Edit event tab](./editing-events#edit-event-details).

Then click `Create event`. The event will be created and will open in a new tab (if allowed by your browser settings).

## Results files

Routegadget supports results files in two formats: `csv` and `IOF XML`.

### CSV format

Routegadget reads the first line of a CSV file, which is assumed to be column headers, and tries to identify all the necessary fields. Sportident CSV files, or any other CSV file that meets the [BOF results file requirements](http://www.britishorienteering.org.uk/images/uploaded/downloads/events_results_submission_file_specification.pdf) should work.

Your CSV file must as a minimum have columns with the following names:

- `Database Id` or `si card` or `sicard` or `chipno`
- `Surname`
- `First name`
- `Start`
- `Time`
- `Classifier` or `nc`
- `City` or `Club`
- `Short`
- `Course`
- `Course controls`
- `Place` or `Pl`
- `Start punch`
- `Control1`
- `Punch1`
- `Control2`

Routegadget will automatically detect if you are using commas or semicolons as the separator.

If you are using [Autodownload](http://www.sportident.co.uk/autodownload/) then you need to generate the file using the "Export OE splits" option.

Emit `Spklasse.csv` files are also supported but you are strongly encouraged not to use them. They do not contain much of the useful detail (such as finish position and finish status) that other formats include.

### IOF XML format

Routegadget supports results in IOF XML 2.0.3 and IOF XML 3.0 format.

## Course files

Routegadget supports courses in IOF XML 2.0.3 and IOF XML 3.0 format. These can be generated from the standard course planning software packages such as OCAD, Condes and Purple Pen.

## Events with more than one map scale

At larger events it is common to use two or more map scales for the various age classes. Ideally this can still be set up as a single event in Routegadget, as long as there is a single course file that contains all of the courses. The map needs to cover all of the used area. It does not matter what scale this is: everything will be handled automatically.

## Setting up relays

Relays typically have a small number of classes but a large number of courses (gaffles). The simple way to set this up is by course, which works in the same way as a normal event. Just make sure you check the "Individual courses (butterfly/score/relay)" checkbox when creating the event. The problem is that you end up with a [large number of courses](http://www.boc.routegadget.co.uk/rg2/#14) with confusing names, and it is difficult to work out who ran what.

It is much more user-friendly to set things up by class. This requires some manual editing of the results and course files, but ends up with [a much nicer result](http://www.boc.routegadget.co.uk/rg2/#19). The main requirement is to define the classes that will be used to group results. Once you have done this you edit the course and results file to use these classes rather than courses.

1) Open the course xml file in a text editor and delete all of the `<Course>..</Course>` information.

2) Add the following for each class. You need to replace "S" and "F" with whatever your start and finish control codes are. This assumes an IOF XML V3 format:

```xml
<Course>
  <Name>A: Men's Premier</Name>
  <CourseControl type="Start">
    <Control>S</Control>
  </CourseControl>
  <CourseControl type="Finish">
    <Control>F</Control>
   </CourseControl>
</Course> 
```

3) Edit the results file and change the "Course" information for each runner to use the relevant class name, change the position to be the team position and add the team number and lap number for the runner. Exactly how you do this depends on what your results format is. If possible the results file then needs to be sorted by class then position then team number then lap. SiTiming software from version 4980 onwards (23 April 2025) can produce the necessary results file format automatically

4) You can now create the event using the two edited files. Make sure you check the "Individual courses (butterfly/score/relay)" checkbox when creating the event.

[Full JK Relay XML definition](https://github.com/Maprunner/rg2/wiki/JK-Relay-Course-Definitions-IOF-XML-v3)

[Full British Relays XML definition](https://github.com/Maprunner/rg2/wiki/British-Relays-Course-Definitions-IOF-XML-v3)