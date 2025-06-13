---
title: "Configuration options"
---

Each installation of Routegadget is configured by the `rg2-config.php` file in the root directory.

The configurable options are described below. For routegadget.co.uk installations a standard set of configuration options is used. You would require FTP access in order to be able to change any of these settings.

## File locations

```php
  // Location of directory where Routegadget is installed.
  // This should have /kartat and /rg2 sub-directories.
  define('RG_BASE_DIRECTORY', 'https://www.test.routegadget.co.uk/rg2');
  // allow js and css to be loaded from a separate location if needed
  // probably only relevant for routegadget.co.uk to avoid 100 copies of source files
  define('OVERRIDE_SOURCE_DIRECTORY', 'http://www.routegadget.co.uk');
  // allow relocating kartat directory: only really relevant for development environment
  // path is relative to RG_BASE_DIRECTORY
  define('OVERRIDE_KARTAT_DIRECTORY', '../rg2-test-data/hh/kartat/');
```

## Splitsbrowser integration

```php
  // location of Splitsbrowser files if required: see Wiki for details of how to install Splitsbrowser
  define('SPLITSBROWSER_DIRECTORY', 'https://www.routegadget.co.uk/splitsbrowser');
```

## JPG map files

```php
  // Whether or not to create JPG files as well as GIFs.
  // Only set to true if you are running both versions of Routegadget using the same kartat directory
  // Defaults to true for backward compatibility
  define('CREATE_JPG_MAP_FILES', false);
```

## Start-up language

```php
  // default language if not English: this is overridden if the query includes a language (e.g. ?lang=fi)
  // requires a dictionary file xx.txt in the lang directory
  define('START_LANGUAGE', 'de');
```

## Character encoding

```php
  // Set encoding for input data default UTF-8. Only needed for compatibility with earlier versions of Routegadget
  define('RG_INPUT_ENCODING', 'UTF-8');
```

## Additional text

```php
  // text displayed at bottom of info dialog. Use '' to leave blank.
  // OS licence text below is needed for installations on routegadget.co.uk site.
  define('ADDITIONAL_INFO_TEXT', 'Maps published on this web site that contain OS data by permission of Ordnance Survey® Licence Number 100046745.');
```

## Georeferencing

```php
  // proj4 co-ordinate reference system for new maps
  // see http://spatialreference.org/ref/epsg/ for master list
  // see http://spatialreference.org/ref/epsg/27700/ for example of UK National Grid
  // select "proj4" in the list see http://spatialreference.org/ref/epsg/27700/proj4/ for example parameter string
  //
  // Note: EPSG:27700 is built in to RG2 as default so you do NOT need to declare it here: this is just an example
  // EPSG:900913 (Google) is also built in
  //
  define('EPSG_CODE', "EPSG:32722");
  define('EPSG_PARAMS', "+proj=utm +zone=22 +south +ellps=WGS84 +datum=WGS84 +units=m +no_defs ");
  define('EPSG_CODE', "EPSG:32722|EPSG:12345");
  define('EPSG_PARAMS', "+proj=utm +zone=22 +south +ellps=WGS84 +datum=WGS84 +units=m +no_defs|+proj=utm +zone=22 +south +ellps=WGS84 +datum=WGS84 +units=m +no_defs");
```
