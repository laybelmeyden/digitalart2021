<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use File;

class CrudController extends Controller
{
    public function gallsviews()
    {
        $result = array();
        $filelist = array();
        if ($handle = opendir('assets/gallers')) {
            while ($entry = readdir($handle)) {
                if (strpos($entry, ".") !== 0) {
                    $filelist[] = $entry;

                    foreach ($filelist as $item) {
                        $openOne = opendir('assets/gallers/'.$item);
                        while ($readOne = readdir($openOne)) {
                            if (strpos($readOne, ".") !== 0) {
                                $result[] = $item.'___'.$readOne;
                                // $result[] = $readOne;
                                // dd($item, $readOne);
                            }
                        }
                        closedir($openOne);
                        // $dirs  = File::Files(public_path('assets/gallers/'.$item));
                        // array_push($result, $item->getFilename());
                    }
                }
            }
            closedir($handle);
        }
        return [$filelist, $result];
    }
}
