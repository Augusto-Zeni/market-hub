<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Enum\CategoryEnum;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = CategoryEnum::listAllFriendly();

        return response([
            'message' => self::MESSAGE_SUCCESS,
            'data' => $categories
        ]);
    }
}
