<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Currency;
use Illuminate\Support\Facades\DB;

class CurrencyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = DB::table('currency')
            ->whereBetween('date', [$_GET['dateFrom'], $_GET['dateTo']])
            ->orderBy('date','asc')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $data->toArray()
        ], 200);
    }

}
