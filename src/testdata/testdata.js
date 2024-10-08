const TEST_API_DATA = `
  {
    "id": "1",
    "title": "Structural Engineering Report for Building X",
    "description": "Detailed analysis of the structural integrity and design specifications for Building X.",
    "project": "Building X Construction Project",
    "category": "Engineering",
    "uploader": "John Smith",
    "uploaded_date": "2024-03-08",
    "file_url": "https://example.com/documents/structural_engineering_report_building_x.pdf"
  },
  {
    "id": "2",
    "title": "Architectural Plans for Building Y",
    "description": "Comprehensive architectural plans including floor plans, elevations, and sections for Building Y.",
    "project": "Building Y Renovation Project",
    "category": "Architecture",
    "uploader": "Emily Johnson",
    "uploaded_date": "2024-03-07",
    "file_url": "https://example.com/documents/architectural_plans_building_y.pdf"
  },
  {
    "id": "3",
    "title": "Electrical System Specifications",
    "description": "Detailed specifications for the electrical systems to be installed in Building Z.",
    "project": "Building Z New Construction Project",
    "category": "Electrical Engineering",
    "uploader": "Michael Williams",
    "uploaded_date": "2024-03-06",
    "file_url": "https://example.com/documents/electrical_system_specifications_building_z.pdf"
  },
  {
    "id": "4",
    "title": "HVAC System Design",
    "description": "Design specifications and calculations for the heating, ventilation, and air conditioning (HVAC) system in Building A.",
    "project": "Building A Expansion Project",
    "category": "Mechanical Engineering",
    "uploader": "Sarah Rodriguez",
    "uploaded_date": "2024-03-05",
    "file_url": "https://example.com/documents/hvac_system_design_building_a.pdf"
  },
  {
    "id": "5",
    "title": "Environmental Impact Assessment",
    "description": "Assessment of the environmental impact of the construction project for regulatory compliance.",
    "project": "City Center Redevelopment Project",
    "category": "Environmental",
    "uploader": "David Brown",
    "uploaded_date": "2024-03-04",
    "file_url": "https://example.com/documents/environmental_impact_assessment_city_center.pdf"
  },
  {
    "id": "6",
    "title": "Geotechnical Survey Results",
    "description": "Results of the geotechnical survey conducted for the construction site of Building B.",
    "project": "Building B Residential Complex Project",
    "category": "Geotechnical Engineering",
    "uploader": "Jennifer Lee",
    "uploaded_date": "2024-03-03",
    "file_url": "https://example.com/documents/geotechnical_survey_results_building_b.pdf"
  },
  {
    "id": "7",
    "title": "Fire Safety Plan",
    "description": "Comprehensive plan outlining fire safety measures and evacuation procedures for Building C.",
    "project": "Building C Office Tower Project",
    "category": "Safety",
    "uploader": "Robert Clark",
    "uploaded_date": "2024-03-02",
    "file_url": "https://example.com/documents/fire_safety_plan_building_c.pdf"
  },
  {
    "id": "8",
    "title": "Cost Estimation Report",
    "description": "Detailed report estimating the costs associated with the construction of Building D.",
    "project": "Building D Commercial Complex Project",
    "category": "Cost Estimation",
    "uploader": "Karen Wilson",
    "uploaded_date": "2024-03-01",
    "file_url": "https://example.com/documents/cost_estimation_report_building_d.pdf"
  },
  {
    "id": "9",
    "title": "Plumbing System Design",
    "description": "Design specifications for the plumbing system to be installed in Building E.",
    "project": "Building E Mixed-Use Development Project",
    "category": "Plumbing Engineering",
    "uploader": "James Taylor",
    "uploaded_date": "2024-02-29",
    "file_url": "https://example.com/documents/plumbing_system_design_building_e.pdf"
  },
  {
    "id": "10",
    "title": "Traffic Impact Study",
    "description": "Study assessing the impact of the new construction project on traffic patterns and congestion.",
    "project": "Highway Expansion Project",
    "category": "Traffic Engineering",
    "uploader": "Amy Garcia",
    "uploaded_date": "2024-02-28",
    "file_url": "https://example.com/documents/traffic_impact_study_highway_expansion.pdf"
  },
  {
    "id": "11",
    "title": "Land Survey Results",
    "description": "Results of the land survey conducted for the construction site of Building F.",
    "project": "Building F Industrial Park Project",
    "category": "Surveying",
    "uploader": "Daniel Martinez",
    "uploaded_date": "2024-02-27",
    "file_url": "https://example.com/documents/land_survey_results_building_f.pdf"
  },
  {
    "id": "12",
    "title": "Accessibility Compliance Assessment",
    "description": "Assessment of the building's compliance with accessibility standards and regulations.",
    "project": "Community Center Renovation Project",
    "category": "Accessibility",
    "uploader": "Rachel Adams",
    "uploaded_date": "2024-02-26",
    "file_url": "https://example.com/documents/accessibility_compliance_assessment_community_center.pdf"
  },
  {
    "id": "13",
    "title": "Noise Impact Study",
    "description": "Study evaluating the potential noise impact of the construction activities on nearby residents.",
    "project": "Residential Complex Project",
    "category": "Environmental",
    "uploader": "Christopher Harris",
    "uploaded_date": "2024-02-25",
    "file_url": "https://example.com/documents/noise_impact_study_residential_complex.pdf"
  },
  {
    "id": "14",
    "title": "BIM Model",
    "description": "Building Information Modeling (BIM) model for visualization and coordination of the construction project.",
    "project": "Mixed-Use Development Project",
    "category": "BIM",
    "uploader": "Jessica Turner",
    "uploaded_date": "2024-02-24",
    "file_url": "https://example.com/documents/bim_model_mixed_use_development.pdf"
  },
  {
    "id": "15",
    "title": "Seismic Analysis Report",
    "description": "Analysis of the building's ability to withstand seismic forces and recommendations for reinforcement.",
    "project": "Seismic Retrofit Project",
    "category": "Structural Engineering",
    "uploader": "Steven White",
    "uploaded_date": "2024-02-23",
    "file_url": "https://example.com/documents/seismic-retrofit-analysis.pdf"
  }
]
`;

export default TEST_API_DATA;
