export enum OccupationRating{
    Cleaner="Light Manual",
    Doctor="Professional",
    Author="White Collar",
    Farmer="Heavy Manual",
    Mechanic="Heavy Manual",
    Florist="Light Manual",
    other="Heavy Manual"
}

export enum RatingFactor{
    "Professional"=1.50,
    "White Collar"=2.25,
    "Light Manual"=11.50,
    "Heavy Manual"=31.75
}

export interface Occupation{
    name:string;
    rating:OccupationRating;
    factor:RatingFactor;
}