# SubDomain Field Migration

## Overview
This migration adds a new `subDomain` field to the Applicant model to support technical sub-domain selection for applicants choosing the "technical" domain.

## Changes Made

### 1. Database Schema Update
- Added `subDomain` field to `Applicant.js` model
- Field is optional (required: false) but required when domain is "technical"
- Enum values: ["ai-ml", "cybersecurity", "blockchain", "webdev"]

### 2. Backend Controller Updates
- Added validation in `applicantController.js` to ensure subDomain is provided for technical applicants
- Automatically clears subDomain for non-technical domains

### 3. Frontend Updates
- Added `subDomain` to form state
- Added sub-domain dropdown that appears only when "technical" domain is selected
- Added frontend validation
- Auto-clears subDomain when domain changes to non-technical

## Running the Migration

### Option 1: Using npm script
```bash
cd backend
npm run migrate
```

### Option 2: Direct execution
```bash
cd backend
node migrations/add-subdomain-field.js
```

## What the Migration Does
- Updates all existing applicant documents to include the `subDomain` field
- Sets existing documents' `subDomain` to `null` (they can be updated later if needed)
- Ensures database consistency

## Post-Migration
After running the migration:
1. Restart your backend server
2. Test the new form submission with technical domain selection
3. Verify that existing applicants can still be retrieved without errors

## Validation Rules
- `subDomain` is required when `domain` is "technical"
- `subDomain` is automatically cleared when `domain` is not "technical"
- Frontend and backend both enforce these rules
