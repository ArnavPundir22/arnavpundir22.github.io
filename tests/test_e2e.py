"""
E2E Test Suite Discovery Entrypoint for standard test runners.
Target: arnavpundir22.github.io
Author: teamwork_test_writer_e2e
"""

from tests.run_e2e_tests import (
    Tier1FeatureCoverageTests,
    Tier2BoundaryCornerCaseTests,
    Tier3CrossFeatureParityTests,
    Tier4RealWorldScenarioTests,
)

__all__ = [
    "Tier1FeatureCoverageTests",
    "Tier2BoundaryCornerCaseTests",
    "Tier3CrossFeatureParityTests",
    "Tier4RealWorldScenarioTests",
]
