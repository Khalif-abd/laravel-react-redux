<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Database\Seeder;

class CurenncyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 30; $i++) {

            $url = 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=';
            $date = date('d/m/Y',strtotime("-$i day"));
            $xml_data = file_get_contents($url.$date);
            $new = simplexml_load_string($xml_data);
            $con = json_encode($new);
            $newArr = json_decode($con, true);

            foreach ($newArr['Valute'] as $data) {
                    Currency::create([
                        'valuteID' => $data['@attributes']['ID'],
                        'numCode' => $data['NumCode'],
                        'сharCode' => $data['CharCode'],
                        'name' => $data['Name'],
                        'nominal' => $data['Nominal'],
                        'value' => $data['Value'],
                        'date' => date('Y-m-d',strtotime("-$i day"))
                    ]);
            }
        }
    }
}
