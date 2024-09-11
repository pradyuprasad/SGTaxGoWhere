import pandas as pd

# Load the CSV data into a DataFrame
df = pd.read_csv('ministry_expenditure_fy2018_fy2024.csv')

# Select the FY2024 (Estimated) column and sum the values to get the total expenditure for FY2024
total_expenditure_fy2024 = df['FY2024 (Estimated)'].sum()

# Calculate the percentage of total expenditure for each ministry
df['FY2024 Percentage'] = (df['FY2024 (Estimated)'] / total_expenditure_fy2024) * 100

# Save the result to a new CSV file
df.to_csv('ministry_expenditure_fy2024_percentage.csv', index=False)

# Display the result
print(df[['Ministry', 'FY2024 (Estimated)', 'FY2024 Percentage']])

