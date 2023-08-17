<?php

namespace Controllers;

use Exception;

use MVC\Router;
use Model\Menu;

class MenuController {

    public static function index(Router $router) {
        $router->render('menu/index', []);
    }
}
