import {Component} from '@angular/core';
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {IDataElement} from "../../interfaces/data-source";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {CdkConnectedOverlay, CdkOverlayOrigin} from "@angular/cdk/overlay";
import {MatButton} from "@angular/material/button";


const data: IDataElement[] = [
  {id: "012589632", brand: "Tefal", name: "Tefal KI700830 серебрястый", cost: 6490, availability: true},
  {id: "685321498", brand: "Tefal", name: "Электрочайник Tefal Silver", cost: 7490, availability: false},
  {id: "023654896", brand: "Tefal", name: "Tefal LOK KO 250130 белый", cost: 5490, availability: true},
  {id: "756321954", brand: "Tefal", name: "Tefal KI770D30 серебристый", cost: 3457, availability: true},
  {id: "023101654", brand: "Tefal", name: "Электрочайник Tefal Silver ION", cost: 7022, availability: true},
  {id: "856329013", brand: "Tefal", name: "Tefal KO45832 черный", cost: 11790, availability: true},
  {id: "300562314", brand: "Xiaomi", name: "Xiaomi Mi Electric Kettle 2 белый", cost: 8812, availability: true},
  {id: "896321000", brand: "Xiaomi", name: "Xiaomi Mi Smart Kettle Pro", cost: 16846, availability: false},
  {id: "078065012", brand: "Xiaomi", name: "Xiaomi Mijia Electric Kettle 1A", cost: 5831, availability: false},
  {id: "765310265", brand: "Xiaomi", name: "Xiaomi Viomi Smart Kettle", cost: 7780, availability: false}, {
    id: "963012558",
    brand: "Xiaomi",
    name: "Xiaomi Mijia Thermostatic Electric Kettle",
    cost: 9457,
    availability: false
  },
  {id: "032156485", brand: "Tefal", name: "Tefal BF925132 белый", cost: 7785, availability: true},
  {id: "965432596", brand: "Xiaomi", name: "Xiaomi Viomi V-SK152B", cost: 20020, availability: true},
  {id: "234567891", brand: "Philips", name: "Philips Daily Collection", cost: 5590, availability: true},
  {id: "345678912", brand: "Philips", name: "Philips Avance Collection", cost: 9500, availability: true},
  {id: "456789123", brand: "Bosch", name: "Bosch Styline", cost: 7499, availability: true},
  {id: "567891234", brand: "Bosch", name: "Bosch ComfortLine", cost: 4500, availability: false},
  {id: "678912345", brand: "Samsung", name: "Samsung Kettle", cost: 11999, availability: true},
  {id: "789123456", brand: "Samsung", name: "Samsung Teapot", cost: 6400, availability: true},
  {id: "891234567", brand: "LG", name: "LG Kettle Smart", cost: 8900, availability: false}
]

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgTemplateOutlet,
    MatFormField,
    MatInput,
    MatHeaderRowDef,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatNoDataRow,
    MatHeaderCellDef,
    MatCellDef,
    MatLabel,
    ReactiveFormsModule,
    MatCheckbox,
    FormsModule,
    MatInputModule, MatFormFieldModule, CdkOverlayOrigin, CdkConnectedOverlay, MatButton
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  dataSource = new MatTableDataSource(data)
  displayedColumns = ["brand", "id", "name", "cost", "availability"]
  brandFilter = new FormControl('')
  idFilter = new FormControl('')
  nameFilter = new FormControl('')
  costFilter = new FormControl('')
  availabilityFilter: boolean
  filterValues: any = {
    brand: "",
    id: "",
    name: "",
    cost: "",
    availability: "",
  }
  protected brandFilterOpen = false
  protected idFilterOpen = false
  protected nameFilterOpen = false
  protected costFilterOpen = false
  protected availabilityFilterOpen = false

  constructor() {
    this.dataSource.filterPredicate = ((data: any, filter: string): boolean => {
      const searchTerms = JSON.parse(filter);
      return data.name.toLowerCase().includes(searchTerms.name)
        && data.id.toLowerCase().includes(searchTerms.id)
        && data.brand.toLowerCase().includes(searchTerms.brand)
        && data.cost.toString().toLowerCase().includes(searchTerms.cost)
        && data.availability.toString().includes(searchTerms.availability)
    })
  }


  applyFilters(column: string, filterValue: string | null) {
    console.log(filterValue)
    this.filterValues[column] = filterValue
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }


  protected readonly name = name;
}
