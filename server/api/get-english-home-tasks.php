<?php
  // Скрипт сканирует директорию и возвращает json-объект список файлов
  // {"2": "fileName1", "3": "fileName2", ... }
  $directory = '/home/vitava/public_html/1a/assets/en-home-tasks';
  $scanned_directory = array_diff(scandir($directory), array('..', '.'));

  header('Content-Type: application/json');
  echo json_encode($scanned_directory);
?>
