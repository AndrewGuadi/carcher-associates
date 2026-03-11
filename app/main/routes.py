from flask import render_template

from app.main import main_bp
from app.main.content import (
    ABOUT_COPY,
    COLLABORATORS,
    DELIVERABLES,
    DRAFTING_SERVICES,
    FEASIBILITY_TOPICS,
    INSTITUTIONS,
    LEADERS,
    MARKETS,
    PROCESS_POINTS,
    REVIEW_STUDY_SERVICES,
    SERVICE_GROUPS,
    SITE,
    SYSTEM_ENGINEERING_SERVICES,
)


def base_context():
    return {
        "site": SITE,
        "about_copy": ABOUT_COPY,
        "markets": MARKETS,
        "service_groups": SERVICE_GROUPS,
        "system_engineering_services": SYSTEM_ENGINEERING_SERVICES,
        "review_study_services": REVIEW_STUDY_SERVICES,
        "feasibility_topics": FEASIBILITY_TOPICS,
        "deliverables": DELIVERABLES,
        "drafting_services": DRAFTING_SERVICES,
        "institutions": INSTITUTIONS,
        "collaborators": COLLABORATORS,
        "leaders": LEADERS,
        "process_points": PROCESS_POINTS,
    }


@main_bp.route("/")
def index():
    return render_template("index.html", page_title="Home", **base_context())


@main_bp.route("/about")
def about():
    return render_template("about.html", page_title="About", **base_context())


@main_bp.route("/services")
def services():
    return render_template("services.html", page_title="Services", **base_context())


@main_bp.route("/projects")
def projects():
    return render_template("projects.html", page_title="Projects", **base_context())


@main_bp.route("/contact")
def contact():
    return render_template("contact.html", page_title="Contact", **base_context())
