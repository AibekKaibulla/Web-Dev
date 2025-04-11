import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Company } from '../../interfaces/company';
import { Vacancy } from '../../interfaces/vacancy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})

export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  selectedCompany: Company | null = null;
  vacancies: Vacancy[] = [];
  loadingCompanies: boolean = false;
  loadingVacancies: boolean = false;
  companyError: string | null = null;
  vacancyError: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      this.loadCompanies();
  }

  loadCompanies(): void {
    this.loadingCompanies = true;
    this.companyError = null;
    this.selectedCompany = null;
    this.vacancies = [];

    this.apiService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
        this.loadingCompanies = false;
      },
      error: (err) => {
        console.error('Error loading companies: ', err);
        this.companyError = 'Failed to load companies. Is the backend running? ';
        this.loadingCompanies = false;
      }
    });
  }

  selectCompany(company: Company): void {
    if (this.selectedCompany?.id === company.id) {
      this.selectedCompany = null;
      this.vacancies = [];
    } else {
      this.selectedCompany = company;
      this.loadVacancies(company.id);
    }
  }

  loadVacancies(companyId: number): void {
    this.loadingVacancies = true;
    this.vacancyError = null;
    this.vacancies = [];

    this.apiService.getCompanyVacancies(companyId).subscribe({
      next: (data) => {
        this.vacancies = data;
        this.loadingVacancies = false;
      },
      error: (err) => {
        console.error(`Error loading for company ${companyId}:`, err);
        this.vacancyError= `Failed to load vacancies for ${this.selectedCompany?.name}`;
        this.loadingVacancies = false;
      }
    });

  }
}
