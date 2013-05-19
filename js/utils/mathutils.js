define(function() {
/*
Math Utils for mapping value ranges
*/
return {
normalize : function($value, $min, $max) {
return ($value - $min) / ($max - $min);
},
interpolate : function($normValue, $min, $max) {
return $min + ($max - $min) * $normValue;
},
map : function($value, $min1, $max1, $min2, $max2) {
if ($value < $min1) {
$value = $min1;
}
if ($value > $max1) {
$value = $max1;
}
var res = this.interpolate(this.normalize($value, $min1, $max1), $min2, $max2);

return res;
}
};

});
